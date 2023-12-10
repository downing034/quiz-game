import { Box, useTheme } from '@mui/material';
import { Category as CategoryType } from 'models/categories/types';
import CategoryHeader from './CategoryHeader';
import QuestionValue from './QuestionValue';
import { CLUE_VALUES } from 'config/constants';

export interface CategoryProps {
	category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
	const theme = useTheme();

	return (
		<Box
			width="100%"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			margin={theme.spacing(0.5)}
		>
			<CategoryHeader name={category.name} />

			{QUESTION_VALUES.map((qValue) => (
        <QuestionValue
        	key={qValue}
        	categoryId={category.id}
        	questionValue={qValue}
        />
      ))}

		</Box>
	);
};

export default Category;