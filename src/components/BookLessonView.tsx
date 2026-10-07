import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  HelpCircle,
  Users,
  Compass,
  FileText,
  MessageSquare,
  Sparkles,
  Info,
  Bookmark,
} from 'lucide-react';
import { MARUGOTO_BOOK_LESSONS } from '../data/bookLessonsData';
import { BookLesson } from '../types/bookTypes';

interface BookLessonViewProps {
  showRomaji: boolean;
  showEnglish: boolean;
  onPlayAudio: (text: string) => void;
  onJumpToCanDoLesson?: (topicNumber: number) => void;
}

export const BookLessonView: React.FC<BookLessonViewProps> = ({
  showRomaji,
  showEnglish,
  onPlayAudio,
  onJumpToCanDoLesson,
}) => {
  const [selectedTopicNumber, setSelectedTopicNumber] = useState<number>(1);
  const [activeStage, setActiveStage] = useState<'prep' | 'listen' | 'read' | 'summary'>('listen');
  const [showCourseInfo, setShowCourseInfo] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const currentLesson: BookLesson =
    MARUGOTO_BOOK_LESSONS.find((l) => l.topicNumber === selectedTopicNumber) ||
    MARUGOTO_BOOK_LESSONS[0];

  const handleSelectAnswer = (qKey: string, ans: string) => {
    setUserAnswers((prev) => ({ ...prev, [qKey]: ans }));
    setRevealedAnswers((prev) => ({ ...prev, [qKey]: true }));
  };

  return (
    <div className="space-y-6">
      {/* Textbook Header Banner */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-0 opacity-60" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase">
                <Bookmark className="w-3.5 h-3.5 text-emerald-700" />
                Book: Marugoto A2-B1
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                まるごと 日本のことばと文化 初中級
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
                The Japan Foundation
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight">
              Marugoto A2-B1 Textbook Lessons
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Learn directly from the official Japan Foundation coursebook. Explore preparation vocabulary, authentic listening scripts, and real reading articles.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={() => setShowCourseInfo(!showCourseInfo)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
            >
              <Info className="w-4 h-4 text-slate-500" />
              <span>{showCourseInfo ? 'Hide Book Info' : 'About This Book'}</span>
            </button>
          </div>
        </div>

        {/* Course Overview Drawer / Collapsible Info */}
        {showCourseInfo && (
          <div className="mt-6 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-slate-700 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Coursebook Structure & JF Language Standard
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3.5 rounded-xl border border-emerald-100">
                <span className="font-bold text-slate-900 block mb-1">A2 Level (Basic User)</span>
                <p className="text-slate-600 leading-relaxed">
                  Understand sentences regarding routine matters, personal background, shopping, and everyday tasks.
                </p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-emerald-100">
                <span className="font-bold text-slate-900 block mb-1">B1 Level (Independent User)</span>
                <p className="text-slate-600 leading-relaxed">
                  Deal with situations while travelling, describe experiences, hopes, ambitions, and give reasons for plans.
                </p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-emerald-100">
                <span className="font-bold text-slate-900 block mb-1">Portfolio & Culture</span>
                <p className="text-slate-600 leading-relaxed">
                  Combines language activities with intercultural understanding (ことばと文化) and self-managed learning.
                </p>
              </div>
            </div>
            <div className="text-slate-600 pt-2 border-t border-emerald-200/60">
              <span className="font-semibold text-emerald-900">Characters in this Book: </span>
              Nakamura-san, Carla-san (France), Jose-san (Mexico), Saitoo-san, Pak-san (Korea), Norika-san, Jorge-san (Brazil), Tyler-san (UK), Anis-san (Indonesia), and Ishikawa-san.
            </div>
          </div>
        )}

        {/* Lesson Horizontal Carousel Selector */}
        <div className="pt-5 overflow-x-auto no-scrollbar">
          <div className="flex gap-2.5 min-w-max pb-1">
            {MARUGOTO_BOOK_LESSONS.map((lesson) => {
              const isSelected = lesson.topicNumber === selectedTopicNumber;
              return (
                <button
                  key={lesson.topicNumber}
                  onClick={() => {
                    setSelectedTopicNumber(lesson.topicNumber);
                    setActiveStage('listen');
                  }}
                  className={`px-4 py-3 rounded-2xl text-left transition-all border min-w-[200px] flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-400'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-emerald-400' : 'text-slate-500'
                      }`}
                    >
                      Topic {lesson.topicNumber}
                    </span>
                    <span
                      className={`text-[10px] font-mono ${
                        isSelected ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {lesson.pages}
                    </span>
                  </div>
                  <div className="font-bold text-sm truncate w-full">
                    {lesson.titleEn}
                  </div>
                  <div
                    className={`text-xs truncate w-full mt-0.5 font-japanese ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {lesson.titleJp}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Lesson Viewer Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
        {/* Lesson Top Banner */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">
                Topic {currentLesson.topicNumber} · {currentLesson.pages}
              </span>
              {onJumpToCanDoLesson && (
                <button
                  onClick={() => onJumpToCanDoLesson(currentLesson.topicNumber)}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 transition cursor-pointer"
                >
                  View in Can-do Mode →
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold font-japanese text-slate-900">
                {currentLesson.titleJp}
              </h2>
              <button
                onClick={() => onPlayAudio(currentLesson.titleJp)}
                className="p-1.5 text-slate-400 hover:text-emerald-600 transition cursor-pointer"
                title="Audio"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {showRomaji && (
              <p className="text-sm font-mono text-slate-500 mt-1">
                {currentLesson.titleRomaji}
              </p>
            )}
            {showEnglish && (
              <p className="text-base text-slate-800 font-semibold mt-1">
                {currentLesson.titleEn}
              </p>
            )}
            <p className="text-xs text-slate-600 mt-2 max-w-3xl leading-relaxed">
              {currentLesson.leadEn}
            </p>
          </div>

          {/* Quick Lesson Switcher buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              disabled={selectedTopicNumber <= 1}
              onClick={() => setSelectedTopicNumber((prev) => Math.max(1, prev - 1))}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              title="Previous Lesson"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-slate-500 font-mono px-1">
              {selectedTopicNumber} / {MARUGOTO_BOOK_LESSONS.length}
            </span>
            <button
              disabled={selectedTopicNumber >= MARUGOTO_BOOK_LESSONS.length}
              onClick={() => setSelectedTopicNumber((prev) => Math.min(MARUGOTO_BOOK_LESSONS.length, prev + 1))}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              title="Next Lesson"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Textbook Stages Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveStage('listen')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
              activeStage === 'listen'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>2. きいてはなす (Listen & Talk)</span>
          </button>

          <button
            onClick={() => setActiveStage('read')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
              activeStage === 'read'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>3. よんでわかる (Read & Understand)</span>
          </button>

          <button
            onClick={() => setActiveStage('prep')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
              activeStage === 'prep'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>1. じゅんび (Preparation)</span>
          </button>

          <button
            onClick={() => setActiveStage('summary')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer whitespace-nowrap ${
              activeStage === 'summary'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>4. まとめ (Review & Summary)</span>
          </button>
        </div>

        {/* STAGE 1: じゅんび (PREPARATION) */}
        {activeStage === 'prep' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {currentLesson.preparation.themeTitleJp}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Look at the topic context and answer these introductory questions:
              </p>

              <div className="space-y-3">
                {currentLesson.preparation.introQuestions.map((q, idx) => (
                  <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-japanese font-medium text-slate-900">{q.jp}</p>
                      <button
                        onClick={() => onPlayAudio(q.jp)}
                        className="p-1 text-slate-400 hover:text-emerald-600 transition cursor-pointer"
                        title="Audio"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    {showRomaji && <p className="text-xs font-mono text-slate-500 mt-1">{q.romaji}</p>}
                    {showEnglish && <p className="text-xs text-slate-700 mt-1">{q.en}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Kanji Words in Preparation */}
            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  漢字のことば (Kanji of this Lesson)
                </h3>
                <span className="text-xs text-amber-800 font-semibold">
                  {currentLesson.preparation.kanjiWords.length} Words
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {currentLesson.preparation.kanjiWords.map((k, kIdx) => (
                  <div key={kIdx} className="p-3 bg-white rounded-xl border border-amber-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold font-japanese text-slate-900">{k.kanji}</div>
                      <div className="text-xs text-amber-700 font-medium font-japanese">{k.reading}</div>
                      {showRomaji && <div className="text-[11px] font-mono text-slate-400">{k.romaji}</div>}
                      {showEnglish && <div className="text-xs text-slate-600 mt-0.5">{k.meaningEn}</div>}
                    </div>
                    <button
                      onClick={() => onPlayAudio(k.kanji)}
                      className="p-1.5 text-slate-400 hover:text-amber-700 transition cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Vocabulary List */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Lesson Vocabulary ({currentLesson.preparation.vocabularyList.length} items)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentLesson.preparation.vocabularyList.map((v, vIdx) => (
                  <div key={vIdx} className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/70 transition flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold font-japanese text-slate-900">{v.jp}</span>
                      {showRomaji && <div className="text-[11px] font-mono text-slate-400">{v.romaji}</div>}
                      {showEnglish && <div className="text-xs text-slate-600 mt-0.5">{v.en}</div>}
                    </div>
                    <button
                      onClick={() => onPlayAudio(v.jp)}
                      className="p-1 text-slate-400 hover:text-emerald-600 transition cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STAGE 2: きいてはなす (LISTEN & TALK) */}
        {activeStage === 'listen' && (
          <div className="space-y-6">
            {currentLesson.listenAndTalk.map((section, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4"
              >
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800">
                        {section.canDoRef}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                        Level {section.canDoLevel}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {section.audioTrack}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-japanese">
                      {section.titleJp}
                    </h3>
                    {showRomaji && <p className="text-xs font-mono text-slate-400">{section.titleRomaji}</p>}
                    {showEnglish && <p className="text-xs text-slate-600 font-medium">{section.titleEn}</p>}
                  </div>
                </div>

                <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong>Situation:</strong> {section.situation}
                </p>

                {/* Dialogue Transcript */}
                <div className="space-y-2.5">
                  {section.script.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-300 transition"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-white text-xs font-bold">
                            {line.speaker}
                          </span>
                          {showEnglish && (
                            <span className="text-xs text-slate-400 font-medium">
                              ({line.speakerEn})
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => onPlayAudio(line.jp)}
                          className="p-1 text-slate-400 hover:text-emerald-600 transition cursor-pointer"
                          title="Listen"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-base font-japanese font-medium text-slate-900 mt-1">
                        {line.jp}
                      </div>
                      {showRomaji && (
                        <div className="text-xs font-mono text-slate-500 mt-0.5">
                          {line.romaji}
                        </div>
                      )}
                      {showEnglish && (
                        <div className="text-xs text-slate-600 mt-0.5">
                          {line.en}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Grammar in conversation point */}
                {section.grammarPoint && (
                  <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-800 space-y-1">
                    <span className="font-bold text-indigo-900 block">
                      Grammar Focus: {section.grammarPoint.patternJp}
                    </span>
                    <p className="text-slate-600">{section.grammarPoint.explanationEn}</p>
                    <div className="mt-1 pt-1 border-t border-indigo-100 font-japanese font-medium text-indigo-950">
                      Ex: {section.grammarPoint.exampleJp}
                    </div>
                  </div>
                )}

                {/* Culture Note */}
                {section.cultureNote && (
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-slate-800 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-amber-900">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      {section.cultureNote.titleJp} ({section.cultureNote.titleEn})
                    </div>
                    <p className="font-medium text-slate-900 font-japanese">
                      {section.cultureNote.questionJp}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {section.cultureNote.explanationEn}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* STAGE 3: よんでわかる (READ & UNDERSTAND) */}
        {activeStage === 'read' && (
          <div className="space-y-6">
            {currentLesson.readAndUnderstand.map((article, aIdx) => (
              <div
                key={aIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5"
              >
                {/* Article Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                        {article.canDoRef}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                        Level {article.canDoLevel}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-violet-100 text-violet-800">
                        {article.textType}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-japanese">
                      {article.titleJp}
                    </h3>
                    {showRomaji && <p className="text-xs font-mono text-slate-400">{article.titleRomaji}</p>}
                    {showEnglish && <p className="text-xs text-slate-600 font-medium">{article.titleEn}</p>}
                  </div>

                  <button
                    onClick={() => onPlayAudio(article.contentJp)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer self-start sm:self-auto"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> Read Aloud
                  </button>
                </div>

                {/* Article Body (Styled like the book email or blog card) */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 font-sans">
                  {article.author && (
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200">
                      Author: {article.author}
                    </div>
                  )}

                  <div className="text-sm md:text-base font-japanese text-slate-900 whitespace-pre-line leading-relaxed">
                    {article.contentJp}
                  </div>

                  {showRomaji && (
                    <div className="pt-3 border-t border-slate-200 text-xs font-mono text-slate-500 whitespace-pre-line leading-relaxed">
                      {article.contentRomaji}
                    </div>
                  )}

                  {showEnglish && (
                    <div className="pt-3 border-t border-slate-200 text-xs md:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                      {article.contentEn}
                    </div>
                  )}
                </div>

                {/* Grammar in Context */}
                {article.grammarInContext && (
                  <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/70 text-xs space-y-2">
                    <span className="font-bold text-indigo-900 block">
                      Grammar in Context: {article.grammarInContext.patternJp}
                    </span>
                    <p className="text-slate-700">{article.grammarInContext.explanationEn}</p>
                    {article.grammarInContext.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="font-japanese text-slate-900 bg-white p-2 rounded-lg border border-indigo-100">
                        {ex.jp}
                        {showRomaji && <span className="block text-[11px] font-mono text-slate-400">{ex.romaji}</span>}
                        {showEnglish && <span className="block text-[11px] text-slate-600">{ex.en}</span>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Interactive Reading Comprehension Questions */}
                {article.comprehensionQuestions && article.comprehensionQuestions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Reading Comprehension Questions
                    </h4>

                    {article.comprehensionQuestions.map((q, qIdx) => {
                      const qKey = `t${currentLesson.topicNumber}-r${aIdx}-q${qIdx}`;
                      const chosen = userAnswers[qKey];
                      const isRevealed = revealedAnswers[qKey];
                      const isCorrect = chosen === q.correctAnswer;

                      return (
                        <div key={qIdx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5">
                          <p className="text-sm font-semibold font-japanese text-slate-900">
                            {qIdx + 1}. {q.questionJp}
                          </p>
                          {showEnglish && <p className="text-xs text-slate-500">{q.questionEn}</p>}

                          <div className="space-y-1.5">
                            {q.options.map((opt, oIdx) => {
                              const isThisOption = chosen === opt;
                              let btnClass = 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200';

                              if (isRevealed) {
                                if (opt === q.correctAnswer) {
                                  btnClass = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-200';
                                } else if (isThisOption && !isCorrect) {
                                  btnClass = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                                }
                              } else if (isThisOption) {
                                btnClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium';
                              }

                              return (
                                <button
                                  key={oIdx}
                                  onClick={() => handleSelectAnswer(qKey, opt)}
                                  className={`w-full p-2.5 text-left text-xs rounded-xl border transition cursor-pointer flex items-center justify-between ${btnClass}`}
                                >
                                  <span className="font-japanese">{opt}</span>
                                  {isRevealed && opt === q.correctAnswer && (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {isRevealed && (
                            <div className="p-2.5 rounded-lg bg-slate-50 text-[11px] text-slate-600 border border-slate-200">
                              <span className="font-semibold text-slate-800">Explanation: </span>
                              {q.explanationEn}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* STAGE 4: まとめ (SUMMARY & REVIEW) */}
        {activeStage === 'summary' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-4">
              <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                トピックのまとめ (Topic Review Key Phrases)
              </h3>
              <div className="space-y-2">
                {currentLesson.topicReviewSummary.keyPhrases.map((kp, kpIdx) => (
                  <div
                    key={kpIdx}
                    className="p-3 bg-white rounded-xl border border-emerald-100 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-japanese font-semibold text-slate-900">{kp.jp}</div>
                      {showRomaji && <div className="text-xs font-mono text-slate-400 mt-0.5">{kp.romaji}</div>}
                      {showEnglish && <div className="text-xs text-slate-600 mt-0.5">{kp.en}</div>}
                    </div>
                    <button
                      onClick={() => onPlayAudio(kp.jp)}
                      className="p-1.5 text-slate-400 hover:text-emerald-600 transition cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Can-do Checklist for Lesson {currentLesson.topicNumber}
              </h3>
              <div className="space-y-2">
                {currentLesson.canDoSummary.map((cando, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{cando}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Intercultural Takeaway (文化のまとめ)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentLesson.topicReviewSummary.culturalTakeaway}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
