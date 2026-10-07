export interface BookPreparation {
  themeTitleJp: string;
  themeTitleEn: string;
  introQuestions: {
    jp: string;
    romaji: string;
    en: string;
  }[];
  vocabularyList: {
    jp: string;
    romaji: string;
    en: string;
    category?: string;
  }[];
  kanjiWords: {
    kanji: string;
    reading: string;
    romaji: string;
    meaningEn: string;
  }[];
}

export interface BookListenSection {
  sectionNumber: number;
  titleJp: string;
  titleRomaji: string;
  titleEn: string;
  canDoRef: string;
  canDoLevel: 'A2' | 'B1';
  situation: string;
  audioTrack: string;
  script: {
    speaker: string;
    speakerEn: string;
    jp: string;
    romaji: string;
    en: string;
  }[];
  grammarPoint?: {
    patternJp: string;
    patternRomaji: string;
    explanationEn: string;
    exampleJp: string;
    exampleEn: string;
  };
  cultureNote?: {
    titleJp: string;
    titleEn: string;
    questionJp: string;
    questionEn: string;
    explanationEn: string;
    options?: string[];
  };
}

export interface BookReadSection {
  sectionNumber: number;
  titleJp: string;
  titleRomaji: string;
  titleEn: string;
  canDoRef: string;
  canDoLevel: 'A2' | 'B1';
  textType: 'Email' | 'Blog' | 'Website Article' | 'Interview' | 'Announcement';
  contentJp: string;
  contentRomaji: string;
  contentEn: string;
  author?: string;
  comprehensionQuestions: {
    questionJp: string;
    questionRomaji: string;
    questionEn: string;
    options: string[];
    correctAnswer: string;
    explanationEn: string;
  }[];
  grammarInContext?: {
    patternJp: string;
    explanationEn: string;
    examples: { jp: string; romaji: string; en: string }[];
  };
}

export interface BookLesson {
  topicNumber: number;
  pages: string;
  titleJp: string;
  titleRomaji: string;
  titleEn: string;
  leadEn: string;
  canDoSummary: string[];
  preparation: BookPreparation;
  listenAndTalk: BookListenSection[];
  readAndUnderstand: BookReadSection[];
  topicReviewSummary: {
    keyPhrases: { jp: string; romaji: string; en: string }[];
    culturalTakeaway: string;
  };
}
