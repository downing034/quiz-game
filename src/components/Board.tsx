import { Box } from '@mui/material';
import Categories from './Categories';

const Board = () => {
	return (
		<Box
			width="98%"
			marginLeft="auto"
			marginRight="auto"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Categories />
		</Box>
	)
};

export default Board;