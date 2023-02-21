import { createContext, useState, useEffect, Dispatch, ReactNode } from 'react';
import { Categories, Questions, MainContextType } from 'models/types';
import { useLoading } from './LoadingContextProvider';

import { getCategories, getQuestions } from 'models/api'

/**
 * Context here is going to include both categories and questions. Since
 * this app is small and questions/categories depend on one another, the
 * extra rerenders won't degrade performance much.
 * */
export const MainContext = 
    createContext<{ questions: Questions, setQuestions: Dispatch<React.SetStateAction<Questions>>, categories: Categories}>({ questions: [], setQuestions: () => {}, categories: [] });

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

  const data: MainContextType = { questions, setQuestions, categories };

  return (
    <MainContext.Provider value={data}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
