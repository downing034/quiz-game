import * as api from './api';
import { Clue } from 'models/categories/types';
import { getCategoriesAndClues } from './model';

describe('model', () => {
  test('getRandomCategories integration', async () => {
    const { categories, clues } = await getCategoriesAndClues();
  
    // each board requires 6 categories
    expect(categories.length).toBe(6);

    // instead of asserting specific data for a category
    // let's just assert the data is present and not empty
    for (const category of categories) {
      expect(category.id).not.toBeNull();
      expect(category.title).not.toBeNull();
      expect(category.clues.length).not.toBe(0);

      let firstCategoryClue = category.clues[0];
      assertValidClue(firstCategoryClue);
    };

    expect(clues.length).not.toBe(0);
    let firstClue = clues[0];
    assertValidClue(firstClue);
  });
});

const assertValidClue = (clue: Clue) => {
  expect(clue.id).not.toBeNull();
  expect(clue.categoryId).not.toBeNull();
  expect(clue.question).not.toBeNull();
  expect(clue.answer).not.toBeNull();
  expect(clue.value).not.toBeNull();
  expect(clue.showQuestion).toBe(false);
  expect(clue.clicked).toBe(false);
};