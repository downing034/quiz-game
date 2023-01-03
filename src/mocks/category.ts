import { Category } from 'models/types';

export const categoryOne: Category = {
	id: 1,
	name: 'State Facts',
	questionIds: [1, 2]
};

export const categoryTwo: Category = {
	id: 2,
	name: 'Nature',
	questionIds: [2, 3]
};

export const categories = [categoryOne, categoryTwo]