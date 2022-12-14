import { Question} from 'models/types';

export const questionOne: Question = {
	id: 1,
  questionText: "This book references a small boy and his art instrument",
  answerText: "Harold & the Purple Crayon",
  showQuestion: false,
  value: 200,
  clicked: false
};

export const questionTwo: Question = {
	id: 2,
  questionText: "This type of diaper is reusable when washed.",
  answerText: "Cloth Diaper",
  showQuestion: false,
  value: 200,
  clicked: false
};

export const questions = [questionOne, questionTwo];