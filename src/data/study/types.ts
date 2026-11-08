export type ThemePrimer = {
  why: string;
  bigPicture: string;
  mustKnow: string[];
  commonMistakes: string[];
  examStory: string;
};

export type Flashcard = {
  id: string;
  themeId: number;
  front: string;
  back: string;
};

export type GlossaryTerm = {
  term: string;
  aka: string;
  definition: string;
  whyItMatters: string;
  themeIds: number[];
  related: string[];
};

export type TheorySection = {
  heading: string;
  body: string;
};

export type ThemeTheory = {
  title: string;
  sections: TheorySection[];
};

export type ThemeConnection = {
  from: number;
  to: number;
  label: string;
};

export type CurriculumStory = {
  title: string;
  paragraphs: string[];
};
