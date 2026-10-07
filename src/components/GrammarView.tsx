import React, { useState } from 'react';
import { Volume2, CheckCircle2, Circle, Compass, Wrench, Clock, BookOpen, Search } from 'lucide-react';
import { GRAMMAR_PATTERNS } from '../data/grammarData';
import { GrammarPattern } from '../types';

interface GrammarViewProps {
  showRomaji: boolean;
  showEnglish: boolean;
  onPlayAudio: (text: string) => void;
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
}

export const GrammarView: React.FC<GrammarViewProps> = ({
  showRomaji,
  showEnglish,
  onPlayAudio,
  masteredIds,
  onToggleMastered,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Sentence Patterns', 'Verbs', 'Particles', 'Spoken Language'];

  const filteredPatterns = GRAMMAR_PATTERNS.filter((pat) => {
    const matchesCat = selectedCategory === 'All' || pat.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;

    const matchesQuery =
      pat.titleJp.toLowerCase().includes(q) ||
      pat.titleRomaji.toLowerCase().includes(q) ||
      pat.titleEn.toLowerCase().includes(q) ||
      pat.howToUse.toLowerCase().includes(q) ||
      pat.whenWeUse.toLowerCase().includes(q);

    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              文法 · Core Structures
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                Grammar
              </h1>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Clear, step-by-step grammar explanations: How to use, when to use, and authentic examples.
            </p>
          </div>
        </div>

        {/* Search and Category Filter Tabs */}
        <div className="pt-4 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search grammar patterns (e.g. つもり, potential form, advice, particles)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grammar Cards List */}
      <div className="space-y-6">
        {filteredPatterns.map((pat) => {
          const isMastered = masteredIds.has(pat.id);

          return (
            <div
              key={pat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-emerald-300 transition"
            >
              {/* Pattern Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {pat.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {pat.topicRef}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <h2 className="text-xl md:text-2xl font-bold font-japanese text-slate-900">
                      {pat.titleJp}
                    </h2>
                    <button
                      onClick={() => onPlayAudio(pat.titleJp)}
                      className="p-1 text-slate-400 hover:text-emerald-600 transition cursor-pointer"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {showRomaji && (
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      {pat.titleRomaji}
                    </p>
                  )}
                  {showEnglish && (
                    <p className="text-sm font-semibold text-emerald-900 mt-1">
                      {pat.titleEn}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => onToggleMastered(pat.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold self-start transition cursor-pointer hover:bg-slate-50"
                >
                  {isMastered ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                      <span className="text-emerald-700">Mastered</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-slate-300" />
                      <span className="text-slate-600">Mark as Understood</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3 Core Blocks: How to Use, When We Use, Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {/* 1. How to use */}
                <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
                    <Wrench className="w-3.5 h-3.5" />
                    1. How to Use (接続とルール)
                  </div>
                  <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed font-sans">
                    {pat.howToUse}
                  </div>
                </div>

                {/* 2. When we use */}
                <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    2. When We Use (使う場面とニュアンス)
                  </div>
                  <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed font-sans">
                    {pat.whenWeUse}
                  </div>
                </div>
              </div>

              {/* 3. Examples */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  3. Provided Examples (例文)
                </div>

                <div className="space-y-2.5">
                  {pat.examples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="p-3.5 rounded-xl bg-slate-50/50 border border-slate-200/60 hover:bg-white hover:border-emerald-200 transition"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm font-japanese font-medium text-slate-900 leading-snug">
                          {ex.jp}
                        </div>
                        <button
                          onClick={() => onPlayAudio(ex.jp)}
                          className="p-1 text-slate-400 hover:text-emerald-600 transition cursor-pointer shrink-0"
                          title="Listen"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {showRomaji && (
                        <div className="text-xs font-mono text-slate-500 mt-1">
                          {ex.romaji}
                        </div>
                      )}
                      {showEnglish && (
                        <div className="text-xs text-slate-600 mt-1">
                          {ex.en}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {filteredPatterns.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-400 text-sm">No grammar patterns found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs font-semibold text-emerald-600 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
