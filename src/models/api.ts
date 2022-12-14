import { Questions, Categories } from 'models/types';

const API_URL = "https://my-json-server.typicode.com/downing034/quiz-game";
export const QUESTIONS_URL = API_URL + "/questions";
export const CATEGORIES_URL = API_URL + "/categories";

export const parseString = (value: any): string => {
  return value ? String(value) : '';
}

export const parseNumber = (value: any): number => {
  return value ? Number(value) : 0;
}

export async function fetchJSON(url: string): Promise<any> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`bad response status ${response.status}`);
  }
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    throw err;
  }
}

export const getQuestions = async (): Promise<Questions> => {
	try {
		const questionsResponse = await fetchJSON(QUESTIONS_URL);

		let questions: Questions = [];

		if (questionsResponse && questionsResponse.length > 0) {
			for (const question of questionsResponse) {
				questions.push({
					id: parseNumber(question.id),
					questionText: parseString(question.questionText),
					answerText: parseString(question.answerText),
					showQuestion: question.showQuestion,
					value: parseNumber(question.value),
					clicked: question.clicked
				})
			}
		};

		return questions;

	} catch (e: any) {
		return e.message;
	}
};

export const getCategories = async (): Promise<Categories> => {
	try {
		const categoriesResponse = await fetchJSON(CATEGORIES_URL);

		let categories: Categories = [];

		if (categoriesResponse && categoriesResponse.length > 0) {
			for (const category of categoriesResponse) {
				const questionIds: number[] = [];

				for (const questionId of questionIds) {
					questionIds.push(parseNumber(questionId));
				}

				category.push({
					id: parseNumber(category.id),
					name: parseString(category.name),
					questionIds
				})
			}
		};

		return categories;
		
	} catch (e: any) {
		return e.message;
	}
};