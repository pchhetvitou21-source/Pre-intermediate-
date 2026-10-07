export interface DialogueLine {
  speaker: string;
  speakerRomaji?: string;
  speakerEn?: string;
  jp: string;
  romaji: string;
  en: string;
  variations?: {
    jp: string;
    romaji: string;
    en: string;
  }[];
  note?: string;
}

export interface CanDoItem {
  id: string;
  number?: number;
  canDoNumber?: number;
  topicNumber: number;
  titleJp: string;
  titleRomaji: string;
  titleEn: string;
  situationEn?: string;
  descriptionEn?: string;
  keyExpressions?: {
    jp: string;
    romaji: string;
    en: string;
  }[];
  keyPhrases?: string[];
  dialogue: DialogueLine[];
}

export interface TopicData {
  topicNumber: number;
  titleJp: string;
  titleRomaji: string;
  titleEn: string;
  summaryEn: string;
  audioTracks?: string;
  canDos: CanDoItem[];
}

export interface KanjiEntry {
  id: number;
  kanji: string;
  reading: string;
  romaji: string;
  meaningEn: string;
  level?: string;
  topicNumber?: number;
  topic?: number;
  topicTitleJp?: string;
  topicTitleEn?: string;
  exampleJp: string;
  exampleRomaji: string;
  exampleEn: string;
}

export interface GrammarExample {
  jp: string;
  romaji: string;
  en: string;
  highlightJp?: string;
}

export interface GrammarPattern {
  id: string;
  category: string;
  topicRef: string;
  titleJp: string;
  titleRomaji: string;
  titleEn: string;
  howToUse: string;
  whenWeUse: string;
  examples: GrammarExample[];
}

export interface TestOption {
  id: string;
  textJp: string;
  textRomaji: string;
  textEn: string;
}

export interface TestQuestion {
  id: string;
  sourceType: 'Can-do' | 'Grammar';
  topicNumber: number;
  referenceLabel: string;
  promptEn: string;
  promptJp: string;
  promptRomaji: string;
  options: TestOption[];
  correctOptionId: string;
  explanationEn: string;
  explanationJp: string;
}

export interface TestAttempt {
  id: string;
  date: string;
  score: number;
  total: number;
  percentage: number;
  incorrectQuestionIds: string[];
  filterType: string;
}
