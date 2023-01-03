import { createContext, useState, useEffect, ReactNode } from 'react';
import { Categories, Questions } from 'models/types';
import { useLoading } from './LoadingContextProvider';

import { getCategories, getQuestions } from 'models/api'

export const MainContext = 
    createContext<{ questions: Questions, categories: Categories}>({ questions: [], categories: [] });

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const { setLoading } = useLoading();
  const [questions, setQuestions] = useState<Questions>([]);
  const [categories, setCategories] = useState<Categories>([]);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse);

      const questionsResponse = await getQuestions();
      setQuestions(questionsResponse);

      setLoading(false)
    })();
  },[setLoading]);

  return (
    <MainContext.Provider value={{questions, categories}}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
