import { Box } from '@mui/material';

import Categories from './Categories';

import {
	MainContextProvider,
} from 'contexts';

const Board = () => {
	return (
		<MainContextProvider>
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
		</MainContextProvider>
	)
};

export default Board;