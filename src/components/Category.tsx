import { Box } from '@mui/material';
import { Category as CategoryType } from 'models/types';
import CategoryHeader from './CategoryHeader';
// import useCategoryQuestions from './useCategoryQuestions';

export interface CategoryProps {
	category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
	// const categoryQuestions = useCategoryQuestions(category.id)

	return (
		<Box
			width="100%"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			margin={0.5}
		>
			<CategoryHeader name={category.name} />
		</Box>
	);
};

export default Category;