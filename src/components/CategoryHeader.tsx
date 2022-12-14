import { Box } from '@mui/material';
import 'styles/board.css';

export interface CategoryHeaderProps {
	name: string;
};

const CategoryHeader = ({ name }: CategoryHeaderProps) => {
	return (
		<Box
			width="100%"
			className="category-header"
			textAlign="center"
		>
			<h4>{name}</h4>
		</Box>
	)
};

export default CategoryHeader;