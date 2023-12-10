import { createContext, useState, useEffect, Dispatch, ReactNode } from 'react';
import { Categories, Clues } from 'models/categories/types';
import { MainContextType } from 'models/types';
import { useLoading } from './LoadingContextProvider';

import { getCategoriesAndClues } from 'models/categories/model';

/**
 * Context here is going to include both categories and clues. Since
 * this app is small and clues/categories depend on one another, the
 * extra rerenders won't degrade performance much.
 * */
export const MainContext = 
    createContext<{ clues: Clues, setClues: Dispatch<React.SetStateAction<Clues>>, categories: Categories}>({ clues: [], setClues: () => {}, categories: [] });

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const { setLoading } = useLoading();
  const [clues, setClues] = useState<Clues>([]);
  const [categories, setCategories] = useState<Categories>([]);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { categories, clues } = await getCategoriesAndClues();
      setCategories(categories);
      setClues(clues);

      setLoading(false)
    })();
  },[setLoading]);

  const data: MainContextType = { clues, setClues, categories };

  return (
    <MainContext.Provider value={data}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
