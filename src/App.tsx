import { Box } from '@mui/material';

import Header from 'components/Header';
import Board from 'components/Board';

import 'styles/app.css';

const App = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      className="app"
    >
      <Header />
      <Board />
    </Box>
  );
};



export default App;
