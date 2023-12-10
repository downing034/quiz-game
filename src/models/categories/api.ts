import { fetchTextData } from 'models/categories';
import { Convert, CategoryResponse as ApiCategory } from 'models/apiTyping';
import { generateRandomCategoryIds } from 'models/categories';

// Third party base categories/clues url
export const PRIMARY_API_URL = "https://jservice.io/api";
export const CATEGORY_URL = PRIMARY_API_URL + "/category";

export const buildCategoryUrl = (categoryId: string | number) => CATEGORY_URL + `?id=${categoryId}`;

export const fetchCategory = async (categoryId: number | string): Promise<ApiCategory> => {
	try {
		// limit the request to 10 random categories for performance
		let categoryResponse = await fetchTextData(buildCategoryUrl(categoryId));
		let formattedCategory = Convert.toCategoryResponse(categoryResponse);

		// some categories do not have 5 clues, so filter them out and fetch again.
		if (formattedCategory.clues_count < 5) {
			let newRandomCategoryId = generateRandomCategoryIds(1)[0];
			categoryResponse = await fetchTextData(buildCategoryUrl(newRandomCategoryId));
			formattedCategory = Convert.toCategoryResponse(categoryResponse);
		};
		
    return formattedCategory;
	} catch (e: any) {
		// TODO: Wire in toast errors
    console.log(e)
		throw new Error("Categories not loaded")
	}
};