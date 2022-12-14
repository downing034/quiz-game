import { Questions, Categories } from 'models/types';

const API_URL = "https://my-json-server.typicode.com/downing034/quiz-game";
const QUESTIONS_URL = API_URL + "/questions";
const CATEGORIES_URL = API_URL + "/categories";

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

		const questions: Questions = 
			questionsResponse.length > 0 ? questionsResponse : [];

		return questions;

	} catch (e: any) {
		return e.message;
	}
};

export const getCategories = async (): Promise<Categories> => {
	try {
		const categoriesResponse = await fetchJSON(CATEGORIES_URL);

		const categories: Categories = 
			categoriesResponse.length > 0 ? categoriesResponse : [];

		return categories;

	} catch (e: any) {
		return e.message;
	}
};