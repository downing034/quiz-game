import { useContext } from 'react';
import { Clues } from 'models/categories/types';
import { MainContextType } from 'models/types';
import { newEmptyClue } from 'models/categories';
import { MainContext } from 'contexts';

const useClue = (categoryId: number, clueValue: number) => {
	const data: MainContextType = useContext(MainContext);
	const allClues: Clues = data.clues;
	const clue = allClues.find((c) => c.categoryId === categoryId && c.value === clueValue) ?? newEmptyClue();

	return clue;
};

export default useClue;