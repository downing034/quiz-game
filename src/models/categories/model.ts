import { fetchCategory } from 'models/categories/api';
import { Categories, Clues } from 'models/categories/types';
import {
  generateRandomCategoryIds,
  mapApiCategory
} from 'models/categories/helpers';

interface CategoryAndClues {
  categories: Categories;
  clues: Clues;
}

export const getCategoriesAndClues = async (): Promise<CategoryAndClues> => {
  // Future TODO: Some categories don't have enough clues. Since I
  // do not own the api, I can't make a request to return clues
  // which have a minimum `clues_count`. Future iteration can make
  // individual requests, and verify there are enough clues.
  const categoryIds = generateRandomCategoryIds(6);

  /**
   * Instead of iterating over categoryIds one by one, the requests
   * will be batched together so the promises can settle together.
   * This will prevent a partially loaded board from being presented.
   */
  try {
    const categoriesResponse = await Promise.all([
      fetchCategory(categoryIds[0]),
      fetchCategory(categoryIds[1]),
      fetchCategory(categoryIds[2]),
      fetchCategory(categoryIds[3]),
      fetchCategory(categoryIds[4]),
      fetchCategory(categoryIds[5]),
    ]);

    // mapping the categeory is strictly for formatting purposes to basically
    // remove snake case in favor of camelCase. Opting not to bring in a lib
    // like lodash since this is simple enough and that would be bloated
    const categories = categoriesResponse.map((apiCategory) => mapApiCategory(apiCategory));
    const clues: Clues = categories.map((cat) => cat.clues).flat();
    return { categories, clues };

  } catch (e: any) {
    throw new Error ('One or more categories could not be loaded, please try again.')
  }
};