import { useContext } from 'react';
import { Categories } from 'models/categories/types';
import { MainContextType } from 'models/types';
import { newEmptyCategory } from 'models/categories';
import { MainContext } from 'contexts';

const useCategory = (categoryId: number) => {
	const data: MainContextType = useContext(MainContext);
	const allCategories: Categories = data.categories;
	const category = allCategories.find((c) => c.id === categoryId) ?? newEmptyCategory();

	return category;
};

export default useCategory;