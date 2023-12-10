import { useContext } from 'react';
import { Clue, Clues } from 'models/categories/types';
import { MainContextType } from 'models/types';
import { MainContext } from 'contexts';

const useCategoryClues = (categoryId: number) => {
	const data: MainContextType = useContext(MainContext);

	const allClues: Clues = data.clues;

	const categoryClues = allClues
		.filter((clue: Clue) => clue.categoryId === categoryId)
		.sort((a: Clue, b: Clue) => {
			return a.value - b.value;
		});

	return categoryClues;
};

export default useCategoryClues;