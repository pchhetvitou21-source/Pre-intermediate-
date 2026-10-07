import React, { useState, useEffect, useCallback } from 'react';
import { BookLessonView } from './components/BookLessonView';
import { CanDoView } from './components/CanDoView';
import { KanjiView } from './components/KanjiView';
import { GrammarView } from './components/GrammarView';
import { TestView } from './components/TestView';
import { TestAttempt } from './types';
import {
  Sparkles,
  BookOpen,
  Languages,
  Award,
  Layers,
  Eye,
  EyeOff,
  Bookmark,
} from 'lucide-react';

type TabType = 'book' | 'cando' | 'kanji' | 'grammar' | 'test';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('book');
  const [showRomaji, setShowRomaji] = useState<boolean>(true);
  const [showEnglish, setShowEnglish] = useState<boolean>(true);

  // Mastered state with localStorage persistence
  const [masteredCanDos, setMasteredCanDos] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('nihongo_mastered_candos');
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const [masteredKanji, setMasteredKanji] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('nihongo_mastered_kanji');
      return saved ? new Set(JSON.parse(saved)) : new Set<number>();
    } catch {
      return new Set<number>();
    }
  });

  const [masteredGrammar, setMasteredGrammar] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('nihongo_mastered_grammar');
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const [testAttempts, setTestAttempts] = useState<TestAttempt[]>(() => {
    try {
      const saved = localStorage.getItem('nihongo_test_attempts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('nihongo_mastered_candos', JSON.stringify(Array.from(masteredCanDos)));
  }, [masteredCanDos]);

  useEffect(() => {
    localStorage.setItem('nihongo_mastered_kanji', JSON.stringify(Array.from(masteredKanji)));
  }, [masteredKanji]);

  useEffect(() => {
    localStorage.setItem('nihongo_mastered_grammar', JSON.stringify(Array.from(masteredGrammar)));
  }, [masteredGrammar]);

  useEffect(() => {
    localStorage.setItem('nihongo_test_attempts', JSON.stringify(testAttempts));
  }, [testAttempts]);

  // Audio Speech Synthesis
  const handlePlayAudio = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.88; // Measured speed for language learners
    window.speechSynthesis.speak(utterance);
  }, []);

  const toggleCanDoMastered = (id: string) => {
    setMasteredCanDos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleKanjiMastered = (id: number) => {
    setMasteredKanji((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleGrammarMastered = (id: string) => {
    setMasteredGrammar((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSaveAttempt = (attempt: TestAttempt) => {
    setTestAttempts((prev) => [attempt, ...prev]);
  };

  const handleJumpToCanDo = () => {
    setActiveTab('cando');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Application Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Brand Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-indigo-600 to-violet-500 text-white flex items-center justify-center font-bold font-japanese shadow-sm text-lg">
                ま
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
                    Marugoto A2-B1
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                    JF Standard
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  Book: Marugoto A2-B1 (まるごと 日本のことばと文化 初中級)
                </p>
              </div>
            </div>

            {/* Global Romaji & English Translation Toggles */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Romaji Toggle */}
              <button
                onClick={() => setShowRomaji(!showRomaji)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                  showRomaji
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                }`}
                title="Toggle Romaji pronunciation display"
              >
                {showRomaji ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>Romaji</span>
              </button>

              {/* English Toggle */}
              <button
                onClick={() => setShowEnglish(!showEnglish)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                  showEnglish
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                    : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                }`}
                title="Toggle English translations"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>English</span>
              </button>
            </div>
          </div>

          {/* Primary Navigation Tabs */}
          <nav className="flex space-x-1 sm:space-x-2 border-t border-slate-100 py-2 overflow-x-auto no-scrollbar">
            {/* 0. Book: Marugoto A2-B1 (Direct Book Lesson Browser) */}
            <button
              onClick={() => setActiveTab('book')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'book'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>Book: Marugoto A2-B1</span>
            </button>

            {/* 1. Can-do */}
            <button
              onClick={() => setActiveTab('cando')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'cando'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Can-do</span>
            </button>

            {/* 2. Kanji */}
            <button
              onClick={() => setActiveTab('kanji')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'kanji'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Kanji</span>
            </button>

            {/* 3. Grammar */}
            <button
              onClick={() => setActiveTab('grammar')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'grammar'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Grammar</span>
            </button>

            {/* 4. Test */}
            <button
              onClick={() => setActiveTab('test')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'test'
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Test</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'book' && (
          <BookLessonView
            showRomaji={showRomaji}
            showEnglish={showEnglish}
            onPlayAudio={handlePlayAudio}
            onJumpToCanDoLesson={handleJumpToCanDo}
          />
        )}

        {activeTab === 'cando' && (
          <CanDoView
            showRomaji={showRomaji}
            showEnglish={showEnglish}
            onPlayAudio={handlePlayAudio}
            masteredIds={masteredCanDos}
            onToggleMastered={toggleCanDoMastered}
          />
        )}

        {activeTab === 'kanji' && (
          <KanjiView
            showRomaji={showRomaji}
            showEnglish={showEnglish}
            onPlayAudio={handlePlayAudio}
            masteredIds={masteredKanji}
            onToggleMastered={toggleKanjiMastered}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarView
            showRomaji={showRomaji}
            showEnglish={showEnglish}
            onPlayAudio={handlePlayAudio}
            masteredIds={masteredGrammar}
            onToggleMastered={toggleGrammarMastered}
          />
        )}

        {activeTab === 'test' && (
          <TestView
            showRomaji={showRomaji}
            showEnglish={showEnglish}
            onPlayAudio={handlePlayAudio}
            attempts={testAttempts}
            onSaveAttempt={handleSaveAttempt}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Book: Marugoto A2-B1 — Japanese Language and Culture (Japan Foundation).</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Can-do: {masteredCanDos.size} mastered</span>
            <span>·</span>
            <span>Kanji: {masteredKanji.size} learned</span>
            <span>·</span>
            <span>Grammar: {masteredGrammar.size} understood</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
