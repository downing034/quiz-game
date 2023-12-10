import { Clue } from 'models/categories/types';

export const clueOne: Clue = {
	id: 1,
  question: "This book references a small boy and his art instrument",
  answer: "Harold & the Purple Crayon",
  showQuestion: false,
  value: 200,
  clicked: false,
  categoryId: 1
};

export const clueTwo: Clue = {
	id: 2,
  question: "This type of diaper is reusable when washed.",
  answer: "Cloth Diaper",
  showQuestion: false,
  value: 200,
  clicked: false,
  categoryId: 2
};

export const clues = [clueOne, clueTwo];