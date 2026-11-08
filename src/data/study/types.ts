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
