import { Box, useTheme } from '@mui/material';
import { Category as CategoryType } from 'models/categories/types';
import CategoryHeader from './CategoryHeader';
import ClueValue from './ClueValue';
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
			<CategoryHeader title={category.title} />

			{CLUE_VALUES.map((qValue) => (
        <ClueValue
        	key={qValue}
        	categoryId={category.id}
        	clueValue={qValue}
        />
      ))}

		</Box>
	);
};

export default Category;