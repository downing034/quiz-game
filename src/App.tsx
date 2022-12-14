import React, { useEffect, useState, createContext } from 'react';
import {
  ApiDataResponse,
  Category,
  Categories,
  Questions
} from 'models/types';
import { getCategories, getQuestions } from 'models/api';
import 'styles/App.css';

export const DataContext = 
    createContext<ApiDataResponse>({ questions: [], categories: [] });

const App = () => {
  const [categories, setCategories] = useState<Categories>([]);
  const [questions, setQuestions] = useState<Questions>([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      const questions = await getQuestions();

      setCategories(categories);
      setQuestions(questions);
    })();
  }, []);


  return (
    <>
      { 
        categories.map((c: Category) => {
          return(<div key={c.id}>{c.name}</div>)
        })
      }
    </>
  );
};



export default App;
