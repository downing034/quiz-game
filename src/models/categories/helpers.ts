import { Category, Clues } from 'models/categories/types';
import { CategoryResponse as ApiCategory } from 'models/apiTyping/types';

export async function fetchTextData(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    console.log(`Error: ${response}`);

    throw new Error(`bad response status ${response.status}`);
  }

  return response.text();
}

export async function fetchJSON(url: string): Promise<any> {
  const response = await fetchTextData(url);

  try {
    return JSON.parse(response);
  } catch (err) {
    throw err;
  };
};

export const generateRandomCategoryIds = (count: number) => {
  return Array.from({ length: count }, () => {
    let categoryId = Math.floor(Math.random() * 20000)
    // category 1 doesn't have enough clues so generate a new
    // category id. This isn't the greatest code, but the chances
    // are low of category 1 getting generated twice in a row.
    return categoryId === 1
      ? Math.floor(Math.random() * 20000)
      : categoryId;
  });
};

// formatters
export const mapApiCategory = (category: ApiCategory): Category => {
  const clues: Clues = [];
  for (const clue of category.clues) {
    clues.push({
      id: clue.id,
      categoryId: clue.category_id,
      question: clue.question,
      answer: clue.answer,
      value: clue.value || 0,
      showQuestion: false,
      clicked: false,
    })
  };
  
  return {
    id: category.id,
    title: category.title,
    clues,
  }
};