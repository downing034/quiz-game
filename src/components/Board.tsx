import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { Category as CategoryType, Categories, Questions } from 'models/types';
import Category from './Category';

import { getCategories, getQuestions } from 'models/api';
import { QuestionsContext } from 'contexts';

import Loader from 'components/Loader';

const Board = () => {
	const [categories, setCategories] = useState<Categories>([]);
  const [questions, setQuestions] = useState<Questions>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
    (async () => {
      const categories = await getCategories();
      const questions = await getQuestions();

      setCategories(categories);
      setQuestions(questions);
      setIsLoading(false);
    })();
  }, []);

	return (
		<Box
			width="98%"
			marginLeft="auto"
			marginRight="auto"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			{ isLoading ?
				<Loader /> : 
	      <QuestionsContext.Provider value={questions}>
		      { 
		        categories.map((c: CategoryType) => {
		          return(<Category key={c.id} category={c} />)
		        })
		      }
			  </QuestionsContext.Provider>
			}
		</Box>
	)
};

export default Board;