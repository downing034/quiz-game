import {
	ApiDataResponse,
	Questions,
	Categories,
} from 'models/types';

export const API_URL = "https://my-json-server.typicode.com/downing034/quiz-game/models";

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

export const getApiData = async (): Promise<ApiDataResponse> => {
	try {
		const apiResponse = await fetchJSON(API_URL);
		const responseData = await apiResponse.json();

		const questions: Questions = 
			responseData.quesitons ? responseData.quesitons : [];

		const categories: Categories = 
			responseData.categories ? responseData.categories : [];

		return {
			questions: [],
			categories: []
		};

  } catch (e: any) {
    return e.message;
  };
};