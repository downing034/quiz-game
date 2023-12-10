import { Convert } from 'models/apiTyping';
// import { Questions, Categories, CategoryV2 } from 'models/types';

// export const parseString = (value: any): string => {
//   return value ? String(value) : '';
// }

// export const parseNumber = (value: any): number => {
//   return value ? Number(value) : 0;
// }

// export const randomNumberInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
// const randomCategoryId = randomNumberInRange(1, 20000);

// export const generateCategoryIdList = () => {
// 	const categoryIds: number[] = [];

// 	while (categoryIds.length < 6) {
// 		// There are around 20,000 available categories which is enough
// 		// to have a low likelihood of repeating between games.
		

// 		if (categoryIds.indexOf(randomCategoryId) === -1) {
// 			categoryIds.push(randomCategoryId);
// 		};
// 	};
	
// 	return categoryIds;
// };



// const fetchQuestionBoard = async (): Promise<CategoryV2[]> => {
// 	try {
// 		// limit the request to 10 random categories for performance
// 		const categoryResponse = await fetchJSON(CATEGORIES_URL + "?count=10");
// 		const allCategories = Convert.toCategoriesResponse(categoryResponse);

// 		// make sure categories have a minimum clues list
// 		let validCategories: CategoryV2[] = [];
		
// 		while (validCategories.length < 6) {
// 			// first try and fill the valid categories for a board
// 			// by using our initial categories request.
// 			for (const category of allCategories) {
// 				if (Number(category.clues_count >= 5)) {
// 					let formattedCategory: CategoryV2 = {
// 						id: Number(category.id),
// 						title: parseString(category.title),
// 						cluesCount: Number(category.clues_count),
// 					};

// 					validCategories.push(formattedCategory);
// 				};
// 			};

// 			// if we don't have 6 valid categories, fetch a few more to get
// 			// a complete list (add buffer of 5 to limit requests count)
// 			let minimumCount = validCategories.length + 5;
// 			const secondCategoryResponse = await fetchJSON(CATEGORIES_URL + `?count=${minimumCount}`);
// 			const secondCategories = Convert.toCategoriesResponse(secondCategoryResponse);

// 			for (const category of secondCategories) {
// 				if (Number(category.clues_count >= 5)) {
// 					let formattedCategory: CategoryV2 = {
// 						id: Number(category.id),
// 						title: parseString(category.title),
// 						cluesCount: Number(category.clues_count),
// 					};

// 					validCategories.push(formattedCategory);
// 				};
// 			};
// 		};

// 		return validCategories;

		

// 	} catch (e: any) {
// 		// TODO: Wire in toast errors
// 		throw new Error("Categories not loaded")
// 	};


// 	const categoryIds = generateCategoryIdList();



// };


// const validateCategoryClueCount = (categoryId: number) => {

// };




// // const API_URL = "https://my-json-server.typicode.com/downing034/quiz-game";
// // export const QUESTIONS_URL = API_URL + "/questions";
// // export const CATEGORIES_URL = API_URL + "/categories";

// // export const getQuestions = async (): Promise<Questions> => {
// // 	try {
// // 		const questionsResponse = await fetchJSON(QUESTIONS_URL);

// // 		let questions: Questions = [];

// // 		if (questionsResponse && questionsResponse.length > 0) {
// // 			for (const question of questionsResponse) {
// // 				questions.push({
// // 					id: parseNumber(question.id),
// // 					questionText: parseString(question.questionText),
// // 					answerText: parseString(question.answerText),
// // 					showQuestion: question.showQuestion,
// // 					value: parseNumber(question.value),
// // 					clicked: question.clicked,
// // 					categoryId: parseNumber(question.category_id),
// // 				})
// // 			}
// // 		};

// // 		return questions;

// // 	} catch (e: any) {
// // 		return e.message;
// // 	}
// // };

// export const getCategories = async (): Promise<Categories> => {
// 	try {
// 		const categoriesResponse = await fetchJSON(CATEGORIES_URL);

// 		let categories: Categories = [];

// 		if (categoriesResponse && categoriesResponse.length > 0) {
// 			for (const category of categoriesResponse) {
// 				const questionIds: number[] = [];

// 				for (const questionId of category.question_ids) {
// 					questionIds.push(parseNumber(questionId));
// 				}

// 				categories.push({
// 					id: parseNumber(category.id),
// 					name: parseString(category.name),
// 					questionIds
// 				})
// 			}
// 		};

// 		return categories;
		
// 	} catch (e: any) {
// 		return e.message;
// 	}
// };

