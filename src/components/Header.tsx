import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import 'styles/app.css';
import 'styles/header.css';

const Header = () => {

	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Link to="/" className="link">
				<h1 className="header">Quiz Game!</h1>
			</Link>
		</Box>
	)
};

export default Header;