import { Box, useMediaQuery, useTheme } from '@mui/material';
import 'styles/board.css';

export interface CategoryHeaderProps {
	title: string;
};

const CategoryHeader = ({ title }: CategoryHeaderProps) => {
	const theme = useTheme();
	const isMobile: boolean = !useMediaQuery(theme.breakpoints.up('md'));

	const styles = {
		minHeight: "80px",
		padding: isMobile ? "0 10 0 10" : "",
	}

	return (
		<Box
			width="100%"
			className="category-header"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			textAlign="center"
			marginBottom={theme.spacing(2)}
			sx={styles}
		>
			<h4>{title.toUpperCase()}</h4>
		</Box>
	)
};

export default CategoryHeader;