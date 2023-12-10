import { Dispatch } from 'react';
import { Categories, Clues } from 'models/categories/types';

export interface ApiDataResponse {
	clues: Clues;
	categories: Categories;
};

export interface MainContextType {
	clues: Clues;
	setClues: Dispatch<React.SetStateAction<Clues>>
	categories: Categories;
};