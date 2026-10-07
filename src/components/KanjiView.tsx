import React, { useState, useMemo } from 'react';
import {
  Search,
  Volume2,
  CheckCircle2,
  Circle,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Layers,
  LayoutGrid,
} from 'lucide-react';
import { KANJI_ENTRIES } from '../data/kanjiData';
import { KanjiEntry } from '../types';

interface KanjiViewProps {
  showRomaji: boolean;
  showEnglish: boolean;
  onPlayAudio: (text: string) => void;
  masteredIds: Set<number>;
  onToggleMastered: (id: number) => void;
}

export const KanjiView: React.FC<KanjiViewProps> = ({
  showRomaji,
  showEnglish,
  onPlayAudio,
  masteredIds,
  onToggleMastered,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<number | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'flashcard'>('grid');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filtered Kanji entries
  const filteredKanji = useMemo(() => {
    return KANJI_ENTRIES.filter((item) => {
      const itemTopic = item.topicNumber ?? item.topic ?? 1;
      const matchesTopic = selectedTopic === 'all' || itemTopic === selectedTopic;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesTopic;

      const matchesQuery =
        item.kanji.toLowerCase().includes(q) ||
        item.reading.toLowerCase().includes(q) ||
        item.romaji.toLowerCase().includes(q) ||
        item.meaningEn.toLowerCase().includes(q);

      return matchesTopic && matchesQuery;
    });
  }, [searchQuery, selectedTopic]);

  const activeCard: KanjiEntry | undefined = filteredKanji[currentCardIndex];

  return (
    <div className="space-y-6">
      {/* Header and Filter Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wide uppercase mb-2">
              漢字 · Pre-Intermediate Vocabulary
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
              Kanji
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Master essential vocabulary words from Pre-Intermediate Topics 1 to 9 with readings and contextual examples.
            </p>
          </div>

          {/* Mode Switcher (Grid vs Flashcard) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid View
            </button>
            <button
              onClick={() => {
                setViewMode('flashcard');
                setCurrentCardIndex(0);
                setIsFlipped(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewMode === 'flashcard'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Flashcards
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="pt-4 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentCardIndex(0);
              }}
              placeholder="Search by kanji (試合), reading (しあい), romaji (shiai), or English (match)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => {
                setSelectedTopic('all');
                setCurrentCardIndex(0);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                selectedTopic === 'all'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
              }`}
            >
              All Topics ({KANJI_ENTRIES.length})
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tNum) => (
              <button
                key={tNum}
                onClick={() => {
                  setSelectedTopic(tNum);
                  setCurrentCardIndex(0);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                  selectedTopic === tNum
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                }`}
              >
                Topic {tNum}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FLASHCARD VIEW */}
      {viewMode === 'flashcard' && activeCard && (
        <div className="max-w-xl mx-auto space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md min-h-[360px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition select-none relative group"
          >
            {/* Top Bar inside Card */}
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono font-semibold">#{activeCard.id} · Topic {activeCard.topicNumber ?? activeCard.topic ?? 1}</span>
              <span className="text-slate-400 group-hover:text-amber-600 flex items-center gap-1 font-medium transition">
                <RotateCw className="w-3.5 h-3.5" /> Tap card to flip
              </span>
            </div>

            {/* Main Content */}
            <div className="text-center py-6">
              {!isFlipped ? (
                <>
                  <div className="text-5xl md:text-6xl font-japanese font-bold text-slate-900 mb-3 tracking-wide">
                    {activeCard.kanji}
                  </div>
                  {showRomaji && (
                    <div className="text-base text-slate-400 font-mono mb-1">
                      {activeCard.romaji}
                    </div>
                  )}
                  <p className="text-xs text-slate-400 mt-4">
                    Click to reveal reading & English meaning
                  </p>
                </>
              ) : (
                <>
                  <div className="text-3xl font-japanese font-bold text-amber-700 mb-1">
                    {activeCard.reading}
                  </div>
                  <div className="text-2xl font-japanese text-slate-800 font-semibold mb-2">
                    {activeCard.kanji}
                  </div>
                  {showRomaji && (
                    <div className="text-sm font-mono text-slate-500 mb-2">
                      {activeCard.romaji}
                    </div>
                  )}
                  {showEnglish && (
                    <div className="text-lg font-bold text-slate-900 mt-2">
                      {activeCard.meaningEn}
                    </div>
                  )}
                  <div className="mt-4 pt-4 border-t border-slate-100 text-left bg-slate-50 p-3 rounded-xl">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Example:
                    </p>
                    <p className="text-sm font-japanese font-medium text-slate-900">
                      {activeCard.exampleJp}
                    </p>
                    {showRomaji && (
                      <p className="text-xs font-mono text-slate-500 mt-0.5">
                        {activeCard.exampleRomaji}
                      </p>
                    )}
                    {showEnglish && (
                      <p className="text-xs text-slate-600 mt-0.5">
                        {activeCard.exampleEn}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Card Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayAudio(activeCard.kanji);
                }}
                className="p-2 rounded-xl bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-700 transition cursor-pointer"
                title="Pronounce"
              >
                <Volume2 className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleMastered(activeCard.id);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition cursor-pointer hover:bg-slate-50"
              >
                {masteredIds.has(activeCard.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                    <span className="text-emerald-700">Learned</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Mark as Learned</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Flashcard Controls (Next/Prev) */}
          <div className="flex items-center justify-between px-2">
            <button
              disabled={currentCardIndex <= 0}
              onClick={() => {
                setCurrentCardIndex((prev) => Math.max(0, prev - 1));
                setIsFlipped(false);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <span className="text-xs font-semibold text-slate-500 font-mono">
              {currentCardIndex + 1} / {filteredKanji.length}
            </span>
            <button
              disabled={currentCardIndex >= filteredKanji.length - 1}
              onClick={() => {
                setCurrentCardIndex((prev) => Math.min(filteredKanji.length - 1, prev + 1));
                setIsFlipped(false);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed shadow-xs"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredKanji.map((item) => {
            const isMastered = masteredIds.has(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-amber-300 hover:shadow-sm transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Topic {item.topicNumber ?? item.topic ?? 1} · #{item.id}
                    </span>
                    <button
                      onClick={() => onToggleMastered(item.id)}
                      className="text-slate-300 hover:text-emerald-600 transition cursor-pointer"
                      title={isMastered ? 'Mastered' : 'Mark as mastered'}
                    >
                      {isMastered ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-300" />
                      )}
                    </button>
                  </div>

                  {/* Main Kanji & Reading */}
                  <div className="flex items-start justify-between gap-2 mt-2">
                    <div>
                      <div className="text-2xl font-japanese font-bold text-slate-900 tracking-wide">
                        {item.kanji}
                      </div>
                      <div className="text-xs font-japanese font-medium text-amber-700 mt-0.5">
                        {item.reading}
                      </div>
                      {showRomaji && (
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {item.romaji}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => onPlayAudio(item.kanji)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-amber-700 hover:bg-amber-50 transition cursor-pointer"
                      title="Audio"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* English meaning */}
                  {showEnglish && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-700">
                        {item.meaningEn}
                      </p>
                    </div>
                  )}
                </div>

                {/* Example sentence */}
                <div className="mt-3 pt-2.5 border-t border-dashed border-slate-100 bg-slate-50/60 -mx-5 -mb-5 p-3 rounded-b-2xl">
                  <div className="flex items-start justify-between gap-1">
                    <div className="text-xs font-japanese text-slate-800 leading-snug">
                      {item.exampleJp}
                    </div>
                    <button
                      onClick={() => onPlayAudio(item.exampleJp)}
                      className="text-slate-400 hover:text-amber-600 transition shrink-0 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                  {showRomaji && (
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {item.exampleRomaji}
                    </div>
                  )}
                  {showEnglish && (
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      {item.exampleEn}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {filteredKanji.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-400 text-sm">No kanji matched your search or filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTopic('all');
            }}
            className="mt-3 text-xs font-semibold text-amber-600 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
