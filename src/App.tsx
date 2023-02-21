import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingContextProvider, MainContextProvider } from 'contexts';

import Board from 'components/Board';
import Header from 'components/Header';
import Question from 'components/Question';
import NotFoundPage from 'components/NotFoundPage';

import 'styles/app.css';

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

              <Route path="category/:categoryId/question/:questionValue" element={<Question />} />

              <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
          
          </MainContextProvider>
        </LoadingContextProvider>
      </Router>
    </Box>
  );
};



export default App;
