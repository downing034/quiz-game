import { Dispatch } from 'react';

export interface Question {
	id: number;
	questionText: string;
	answerText: string;
	showQuestion: boolean;
	value: number;
	clicked: boolean;
	categoryId: number;
};

export type Questions = Question[];

export interface Category {
	id: number;
	name: string;
	questionIds: number[];
};

export type Categories = Category[];

export interface ApiDataResponse {
	questions: Questions;
	categories: Categories;
};

export interface MainContextType {
	questions: Questions;
	setQuestions: Dispatch<React.SetStateAction<Questions>>
	categories: Categories;
};