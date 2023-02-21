import { useContext } from 'react';
import { Categories, MainContextType } from 'models/types';
import { newEmptyCategory } from 'models/api';
import { MainContext } from 'contexts';

const useCategory = (categoryId: number) => {
	const data: MainContextType = useContext(MainContext);
	const allCategories: Categories = data.categories;
	const category = allCategories.find((c) => c.id === categoryId) ?? newEmptyCategory();

	return category;
};

export default useCategory;