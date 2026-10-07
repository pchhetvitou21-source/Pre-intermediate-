import React, { useState } from 'react';
import { Volume2, CheckCircle2, Circle, Sparkles, BookOpen, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import { CANDO_TOPICS } from '../data/candoData';
import { CanDoItem, TopicData } from '../types';

interface CanDoViewProps {
  showRomaji: boolean;
  showEnglish: boolean;
  onPlayAudio: (text: string) => void;
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
}

export const CanDoView: React.FC<CanDoViewProps> = ({
  showRomaji,
  showEnglish,
  onPlayAudio,
  masteredIds,
  onToggleMastered,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [selectedCanDoId, setSelectedCanDoId] = useState<string | null>(null);

  const currentTopic: TopicData =
    CANDO_TOPICS.find((t) => t.topicNumber === selectedTopicId) || CANDO_TOPICS[0];

  const activeCanDo: CanDoItem =
    (selectedCanDoId && currentTopic.canDos.find((c) => c.id === selectedCanDoId)) ||
    currentTopic.canDos[0];

  return (
    <div className="space-y-6">
      {/* Header & Lesson Selector Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Can-do Objectives
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
              Can-do
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Select a lesson below to explore its practical communication goals and authentic dialogues.
            </p>
          </div>

          {/* Quick Lesson Dropdown Selector */}
          <div className="flex items-center gap-3">
            <label htmlFor="lesson-selector" className="text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap">
              Select Lesson:
            </label>
            <select
              id="lesson-selector"
              value={selectedTopicId}
              onChange={(e) => {
                const topicId = Number(e.target.value);
                setSelectedTopicId(topicId);
                const topic = CANDO_TOPICS.find((t) => t.topicNumber === topicId);
                if (topic && topic.canDos.length > 0) {
                  setSelectedCanDoId(topic.canDos[0].id);
                }
              }}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 shadow-xs transition cursor-pointer"
            >
              {CANDO_TOPICS.map((topic) => (
                <option key={topic.topicNumber} value={topic.topicNumber}>
                  Lesson {topic.topicNumber}: {topic.titleEn} ({topic.titleJp})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Lesson Horizontal Pills / Carousel */}
        <div className="pt-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max pb-1">
            {CANDO_TOPICS.map((topic) => {
              const isSelected = topic.topicNumber === selectedTopicId;
              const completedCount = topic.canDos.filter((c) => masteredIds.has(c.id)).length;
              const totalCount = topic.canDos.length;

              return (
                <button
                  key={topic.topicNumber}
                  onClick={() => {
                    setSelectedTopicId(topic.topicNumber);
                    if (topic.canDos.length > 0) {
                      setSelectedCanDoId(topic.canDos[0].id);
                    }
                  }}
                  className={`px-4 py-2.5 rounded-xl text-left transition-all flex flex-col items-start min-w-[170px] border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-200'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isSelected ? 'text-indigo-200' : 'text-slate-400'
                      }`}
                    >
                      Lesson {topic.topicNumber}
                    </span>
                    {completedCount === totalCount && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    )}
                  </div>
                  <div className="font-semibold text-sm truncate w-full mt-0.5">
                    {topic.titleEn}
                  </div>
                  <div
                    className={`text-xs truncate w-full ${
                      isSelected ? 'text-indigo-100' : 'text-slate-500'
                    }`}
                  >
                    {topic.titleJp}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Lesson Overview & Can-do Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Lesson's Can-Do Goals list */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Lesson {currentTopic.topicNumber} Can-do Goals
              </h2>
              <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded-full">
                {currentTopic.canDos.length} Goals
              </span>
            </div>

            <p className="text-xs text-slate-500 my-3 leading-relaxed">
              {currentTopic.summaryEn}
            </p>

            <div className="space-y-2 mt-4">
              {currentTopic.canDos.map((cando) => {
                const isActive = activeCanDo.id === cando.id;
                const isMastered = masteredIds.has(cando.id);

                return (
                  <div
                    key={cando.id}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-50/80 border-indigo-300 ring-1 ring-indigo-200'
                        : 'bg-white hover:bg-slate-50 border-slate-200'
                    }`}
                    onClick={() => setSelectedCanDoId(cando.id)}
                  >
                    <div className="flex items-start gap-2.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleMastered(cando.id);
                        }}
                        className="mt-0.5 text-slate-400 hover:text-emerald-600 transition"
                        title={isMastered ? 'Marked as mastered' : 'Mark as mastered'}
                      >
                        {isMastered ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 hover:text-slate-400" />
                        )}
                      </button>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
                            Can-do {cando.number || cando.canDoNumber || 1}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-slate-900 leading-snug">
                          {cando.titleJp}
                        </div>
                        {showRomaji && (
                          <div className="text-xs text-slate-500 font-mono mt-0.5 leading-snug">
                            {cando.titleRomaji}
                          </div>
                        )}
                        {showEnglish && (
                          <div className="text-xs text-indigo-900/80 font-medium mt-1 leading-snug">
                            {cando.titleEn}
                          </div>
                        )}
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 mt-1 transition-transform ${
                          isActive ? 'text-indigo-600 translate-x-0.5' : 'text-slate-300'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination between lessons */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
              <button
                disabled={selectedTopicId <= 1}
                onClick={() => {
                  if (selectedTopicId > 1) {
                    setSelectedTopicId(selectedTopicId - 1);
                    const prevTopic = CANDO_TOPICS.find((t) => t.topicNumber === selectedTopicId - 1);
                    if (prevTopic) setSelectedCanDoId(prevTopic.canDos[0].id);
                  }
                }}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-indigo-600 disabled:opacity-40 disabled:hover:text-slate-600 cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Previous Lesson
              </button>
              <button
                disabled={selectedTopicId >= CANDO_TOPICS.length}
                onClick={() => {
                  if (selectedTopicId < CANDO_TOPICS.length) {
                    setSelectedTopicId(selectedTopicId + 1);
                    const nextTopic = CANDO_TOPICS.find((t) => t.topicNumber === selectedTopicId + 1);
                    if (nextTopic) setSelectedCanDoId(nextTopic.canDos[0].id);
                  }
                }}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-indigo-600 disabled:opacity-40 disabled:hover:text-slate-600 cursor-pointer disabled:cursor-not-allowed"
              >
                Next Lesson <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Can-Do Details & Dialogue Model */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            {/* Can-do Header Card */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider">
                    Lesson {currentTopic.topicNumber} · Can-do {activeCanDo.number || activeCanDo.canDoNumber || 1}
                  </span>
                  <button
                    onClick={() => onToggleMastered(activeCanDo.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md border transition cursor-pointer hover:bg-slate-50"
                  >
                    {masteredIds.has(activeCanDo.id) ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Mastered</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-600">Mark Complete</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {activeCanDo.titleJp}
                  </h2>
                  <button
                    onClick={() => onPlayAudio(activeCanDo.titleJp)}
                    className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-full transition cursor-pointer"
                    title="Listen to Japanese pronunciation"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {showRomaji && (
                  <p className="text-sm font-mono text-slate-500 mt-1">
                    {activeCanDo.titleRomaji}
                  </p>
                )}
                {showEnglish && (
                  <p className="text-base text-indigo-900 font-medium mt-1">
                    {activeCanDo.titleEn}
                  </p>
                )}
              </div>
            </div>

            {/* Practical Goal description */}
            <div className="py-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                What you can achieve in Japanese
              </h3>
              <p className="text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200 leading-relaxed">
                {activeCanDo.situationEn || activeCanDo.descriptionEn || 'Practice everyday conversational competence in Japanese.'}
              </p>
            </div>

            {/* Model Dialogue Section */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600" />
                  Model Dialogue (会話例)
                </h3>
                <span className="text-xs text-slate-500">
                  Click the speaker icon to listen
                </span>
              </div>

              <div className="space-y-3">
                {activeCanDo.dialogue.map((line, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-indigo-200 transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2 py-0.5 rounded bg-slate-800 text-white text-xs font-bold">
                          {line.speaker}
                        </span>
                        {showEnglish && (
                          <span className="text-xs text-slate-500 font-medium">
                            ({line.speakerEn})
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => onPlayAudio(line.jp)}
                        className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-white rounded transition cursor-pointer"
                        title="Listen"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Japanese line */}
                    <div className="text-base md:text-lg font-medium text-slate-900 mt-2 font-japanese">
                      {line.jp}
                    </div>

                    {/* Romaji */}
                    {showRomaji && (
                      <div className="text-xs font-mono text-slate-500 mt-1">
                        {line.romaji}
                      </div>
                    )}

                    {/* English translation */}
                    {showEnglish && (
                      <div className="text-sm text-indigo-950 font-normal mt-1 text-slate-700">
                        {line.en}
                      </div>
                    )}

                    {/* Variations if available */}
                    {line.variations && line.variations.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-dashed border-slate-200">
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                          Natural Alternative Expressions:
                        </div>
                        {line.variations.map((v, vIdx) => (
                          <div key={vIdx} className="text-xs text-slate-600 pl-2 border-l-2 border-indigo-300 mt-1">
                            <span className="font-japanese font-medium text-slate-800">{v.jp}</span>
                            {showRomaji && <span className="text-slate-400 font-mono ml-2">({v.romaji})</span>}
                            {showEnglish && <span className="text-slate-600 ml-2">— {v.en}</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Phrases & Vocabulary */}
            {((activeCanDo.keyExpressions && activeCanDo.keyExpressions.length > 0) || (activeCanDo.keyPhrases && activeCanDo.keyPhrases.length > 0)) && (
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Essential Keywords & Phrases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeCanDo.keyExpressions?.map((expr, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => onPlayAudio(expr.jp)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50/70 hover:bg-indigo-100 text-indigo-900 text-xs font-medium border border-indigo-200/60 transition cursor-pointer"
                    >
                      <span className="font-japanese font-semibold">{expr.jp}</span>
                      {showRomaji && <span className="text-[11px] font-mono text-indigo-400">({expr.romaji})</span>}
                      {showEnglish && <span className="text-xs text-indigo-700">— {expr.en}</span>}
                      <Volume2 className="w-3 h-3 text-indigo-500 shrink-0" />
                    </button>
                  ))}
                  {activeCanDo.keyPhrases?.map((phrase, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => onPlayAudio(phrase)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50/70 hover:bg-indigo-100 text-indigo-900 text-xs font-medium border border-indigo-200/60 transition cursor-pointer"
                    >
                      <span className="font-japanese font-semibold">{phrase}</span>
                      <Volume2 className="w-3 h-3 text-indigo-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
