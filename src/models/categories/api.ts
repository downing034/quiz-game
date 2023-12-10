import { fetchTextData } from 'models/categories';
import { Convert, CategoryResponse as ApiCategory } from 'models/apiTyping';

// Third party base questions url
export const PRIMARY_API_URL = "https://www.jservice.io/api";
export const CATEGORY_URL = PRIMARY_API_URL + "/category";

export const buildCategoryUrl = (categoryId: string | number) => CATEGORY_URL + `?id=${categoryId}`;

export const fetchCategory = async (categoryId: number | string): Promise<ApiCategory> => {
	try {
		// limit the request to 10 random categories for performance
		const categoryResponse = await fetchTextData(buildCategoryUrl(categoryId));
    return Convert.toCategoryResponse(categoryResponse);
	} catch (e: any) {
		// TODO: Wire in toast errors
    console.log(e)
		throw new Error("Categories not loaded")
	}
};