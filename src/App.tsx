import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingContextProvider, MainContextProvider } from 'contexts';

import Board from 'components/Board';
import Header from 'components/Header';
import Clue from 'components/Clue';
import NotFoundPage from 'components/NotFoundPage';

import 'styles/shared.css';

const App = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      className="app"
    >
      <Router>
        <LoadingContextProvider>
          <MainContextProvider>

            <Header />

            <Routes>
              <Route path="/" element={<Board />} />

              <Route path="category/:categoryId/clue/:clueValue" element={<Clue />} />

              <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
          
          </MainContextProvider>
        </LoadingContextProvider>
      </Router>
    </Box>
  );
};



export default App;
