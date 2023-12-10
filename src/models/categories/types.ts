export interface Category {
  id: Number;
  title: string;
  clues: Clues;
};
 
export type Categories = Category[];

export interface Clue {
  id: number;
  categoryId: number;
  question: string;
  answer: string;
  value: number;
  showQuestion: false;
  clicked: false;
};

export type Clues = Clue[];