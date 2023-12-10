import {
  CategoryResponse as ApiCategory,
  Clue as ApiClue,
} from 'models/apiTyping'
import { Category } from 'models/categories/types';
import { generateRandomCategoryIds, mapApiCategory } from 'models/categories/helpers';
import categoryFour from 'mocks/data/categoryResponse/categoryFour.json';

describe('helpers', () => {
  test('mapApiCategory', () => {
    const apiClue: ApiClue = {
      ...categoryFour.clues[0],
      airdate: new Date()
    };

    const apiCategory: ApiCategory = {
      ...categoryFour,
      clues: [apiClue]
    };

    const expectedCategory: Category = {
      id: 4,
      title: 'comic cats & dogs',
      clues: [
        {
          id: 3,
          categoryId: 4,
          question: "This canine caped crusader floats by Macy's every Thanksgiving",
          answer: 'Underdog',
          value: 100,
          showQuestion: false,
          clicked: false
        }
      ]
    };

    expect(mapApiCategory(apiCategory)).toStrictEqual(expectedCategory);
  });

  test('generateRandomCategoryIds', () => {
    expect(generateRandomCategoryIds(6).length).toBe(6);
  });
});