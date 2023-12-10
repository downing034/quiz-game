import {
  fetchCategory,
} from './api';

describe('api', () => {
  test('fetchCategory', async () => {
    const category = await fetchCategory(6);

    expect(category instanceof Object).toBe(true);

    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('title');
    expect(category).toHaveProperty('clues_count');
    expect(category).toHaveProperty('clues')
    expect(category.clues instanceof Array).toBe(true);
    
    // validate a clue has the necessary api data
    const firstClue = category.clues[0];
    expect(firstClue).toHaveProperty('id');
    expect(firstClue).toHaveProperty('answer');
    expect(firstClue).toHaveProperty('question');
    expect(firstClue).toHaveProperty('value');
  });
});