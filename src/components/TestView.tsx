import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  AlertTriangle,
  History,
  Play,
  Award,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { TEST_QUESTIONS } from '../data/testQuestions';
import { TestAttempt, TestQuestion } from '../types';

interface TestViewProps {
  showRomaji: boolean;
  showEnglish: boolean;
  onPlayAudio: (text: string) => void;
  attempts: TestAttempt[];
  onSaveAttempt: (attempt: TestAttempt) => void;
}

export const TestView: React.FC<TestViewProps> = ({
  showRomaji,
  showEnglish,
  onPlayAudio,
  attempts,
  onSaveAttempt,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'Can-do' | 'Grammar'>('all');
  const [onlyReviewErrors, setOnlyReviewErrors] = useState(false);

  // Filtered test question pool
  const questions: TestQuestion[] = useMemo(() => {
    let pool = TEST_QUESTIONS;
    if (activeFilter !== 'all') {
      pool = pool.filter((q) => q.sourceType === activeFilter);
    }
    if (onlyReviewErrors) {
      // Filter by the questions answered incorrectly in the latest attempt
      const latest = attempts[0];
      if (latest) {
        const wrongIds = new Set(latest.incorrectQuestionIds);
        pool = pool.filter((q) => wrongIds.has(q.id));
      }
    }
    return pool;
  }, [activeFilter, onlyReviewErrors, attempts]);

  // Calculate score upon submission
  const scoreData = useMemo(() => {
    let correct = 0;
    const incorrectIds: string[] = [];

    questions.forEach((q) => {
      const userChoice = selectedAnswers[q.id];
      if (userChoice === q.correctOptionId) {
        correct++;
      } else {
        incorrectIds.push(q.id);
      }
    });

    const total = questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return { correct, total, percentage, incorrectIds };
  }, [questions, selectedAnswers]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    const newAttempt: TestAttempt = {
      id: 'att-' + Date.now(),
      date: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      score: scoreData.correct,
      total: scoreData.total,
      percentage: scoreData.percentage,
      incorrectQuestionIds: scoreData.incorrectIds,
      filterType: activeFilter,
    };
    onSaveAttempt(newAttempt);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setOnlyReviewErrors(false);
  };

  const handleRetryMissed = () => {
    const wrongIds = scoreData.incorrectIds;
    const clearedAnswers: Record<string, string> = {};
    // keep or reset
    setSelectedAnswers(clearedAnswers);
    setOnlyReviewErrors(true);
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-semibold tracking-wide uppercase mb-2">
              <Award className="w-3.5 h-3.5" />
              Assessments & Progress
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
              Test
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Verify your understanding with curated questions drawn from Can-do dialogues and Grammar patterns.
            </p>
          </div>

          {/* Test Category Filters */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            <button
              disabled={isSubmitted}
              onClick={() => {
                setActiveFilter('all');
                setSelectedAnswers({});
                setOnlyReviewErrors(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              } disabled:opacity-60`}
            >
              All ({TEST_QUESTIONS.length})
            </button>
            <button
              disabled={isSubmitted}
              onClick={() => {
                setActiveFilter('Can-do');
                setSelectedAnswers({});
                setOnlyReviewErrors(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeFilter === 'Can-do'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              } disabled:opacity-60`}
            >
              Can-do
            </button>
            <button
              disabled={isSubmitted}
              onClick={() => {
                setActiveFilter('Grammar');
                setSelectedAnswers({});
                setOnlyReviewErrors(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeFilter === 'Grammar'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              } disabled:opacity-60`}
            >
              Grammar
            </button>
          </div>
        </div>

        {/* Previous Attempts Bar */}
        {attempts.length > 0 && (
          <div className="pt-4 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
            <div className="flex items-center gap-1.5">
              <History className="w-3.5 h-3.5 text-slate-400" />
              <span>Past Attempts: <strong>{attempts.length}</strong></span>
              <span className="mx-1.5 text-slate-300">|</span>
              <span>Latest Score: <strong className="text-violet-700">{attempts[0]?.score}/{attempts[0]?.total} ({attempts[0]?.percentage}%)</strong></span>
            </div>
            {onlyReviewErrors && (
              <span className="inline-flex items-center gap-1 text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                <AlertTriangle className="w-3 h-3" /> Focused on previously missed questions
              </span>
            )}
          </div>
        )}
      </div>

      {/* RESULT SCORECARD BANNER (Appears after submission) */}
      {isSubmitted && (
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-violet-200 shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-violet-100 rounded-full blur-2xl -z-0 opacity-50" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-600 text-white shadow-md mb-1">
              <Sparkles className="w-8 h-8" />
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
              Test Completed!
            </h2>

            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl font-black font-display text-violet-700">
                {scoreData.percentage}%
              </span>
              <span className="text-slate-400 text-lg font-medium self-end mb-2">
                ({scoreData.correct} / {scoreData.total} correct)
              </span>
            </div>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {scoreData.percentage >= 80
                ? 'Excellent work! You have strong mastery over pre-intermediate expressions and grammar rules.'
                : scoreData.percentage >= 50
                ? 'Good effort! Review the explanations for the questions you missed below to solidify your understanding.'
                : 'Keep practicing! Check the incorrect questions below, listen to the examples, and try again.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition cursor-pointer shadow-xs"
              >
                <RotateCcw className="w-4 h-4" /> Start Fresh
              </button>

              {scoreData.incorrectIds.length > 0 && (
                <button
                  onClick={handleRetryMissed}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition cursor-pointer shadow-xs"
                >
                  <AlertTriangle className="w-4 h-4" /> Retry {scoreData.incorrectIds.length} Missed Questions
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* QUESTIONS LIST */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const userChoice = selectedAnswers[q.id];
          const isAnswered = !!userChoice;
          const isCorrect = userChoice === q.correctOptionId;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl p-6 border transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 ring-1 ring-emerald-100 bg-emerald-50/20'
                    : 'border-rose-300 ring-1 ring-rose-100 bg-rose-50/20'
                  : 'border-slate-200/90 shadow-xs'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    Question {qIndex + 1} of {questions.length}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-violet-100 text-violet-800">
                    {q.sourceType}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {q.referenceLabel}
                  </span>
                </div>

                {isSubmitted && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Question Prompt */}
              <div className="space-y-1 mb-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-semibold text-slate-900 leading-snug">
                    {q.promptEn}
                  </p>
                  <button
                    onClick={() => onPlayAudio(q.promptJp)}
                    className="p-1 text-slate-400 hover:text-violet-600 transition cursor-pointer shrink-0"
                    title="Audio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-sm font-japanese font-medium text-slate-700">
                  {q.promptJp}
                </p>

                {showRomaji && (
                  <p className="text-xs font-mono text-slate-400">
                    {q.promptRomaji}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {q.options.map((opt) => {
                  const isSelected = userChoice === opt.id;
                  const isCorrectAnswer = opt.id === q.correctOptionId;

                  let optionStyle =
                    'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                  if (isSubmitted) {
                    if (isCorrectAnswer) {
                      optionStyle =
                        'bg-emerald-50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-200 font-semibold';
                    } else if (isSelected && !isCorrect) {
                      optionStyle =
                        'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-200 line-through opacity-80';
                    } else {
                      optionStyle = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle =
                      'bg-violet-50 border-violet-500 text-violet-950 ring-2 ring-violet-200 shadow-xs font-medium';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={isSubmitted}
                      onClick={() => {
                        setSelectedAnswers((prev) => ({
                          ...prev,
                          [q.id]: opt.id,
                        }));
                      }}
                      className={`p-3.5 rounded-xl border text-left transition flex items-start gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-violet-600 text-white border-violet-600'
                            : 'bg-white text-slate-600 border-slate-300'
                        }`}
                      >
                        {opt.id}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-japanese font-medium leading-snug">
                          {opt.textJp}
                        </div>
                        {showRomaji && (
                          <div className="text-xs font-mono text-slate-500 mt-0.5">
                            {opt.textRomaji}
                          </div>
                        )}
                        {showEnglish && (
                          <div className="text-xs text-slate-600 mt-0.5">
                            {opt.textEn}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Review Section (Shown after submission) */}
              {isSubmitted && (
                <div
                  className={`mt-4 pt-4 border-t ${
                    isCorrect ? 'border-emerald-100' : 'border-rose-100'
                  }`}
                >
                  <div className="bg-slate-50/90 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-violet-600" />
                      Answer Explanation & Context
                    </div>
                    <p className="text-xs font-medium text-slate-800 leading-relaxed">
                      {q.explanationEn}
                    </p>
                    <p className="text-xs font-japanese text-slate-600 mt-1">
                      {q.explanationJp}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submission Actions Footer */}
      {!isSubmitted && (
        <div className="sticky bottom-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl flex items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            Answered: <strong>{Object.keys(selectedAnswers).length}</strong> of <strong>{questions.length}</strong>
          </div>
          <button
            disabled={Object.keys(selectedAnswers).length === 0}
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <Play className="w-4 h-4 fill-white" /> Submit Test & View Score
          </button>
        </div>
      )}
    </div>
  );
};
