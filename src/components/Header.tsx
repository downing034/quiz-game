import { Box } from '@mui/material';
import 'styles/header.css';

const Header = () => {

	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<h1 className="header">Quiz Game!</h1>
		</Box>
	)
};

export default Header;