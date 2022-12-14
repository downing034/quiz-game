export interface Question {
	id: number;
	questionText: string;
	answerText: string;
	showQuestion: boolean;
	value: number;
	clicked: boolean;
};

export type Questions = Question[];

export interface Category {
	id: number;
	name: string;
	question_ids: number[];
};

export type Categories = Category[];

export interface ApiDataResponse {
	questions: Questions;
	categories: Categories;
}