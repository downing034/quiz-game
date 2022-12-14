import { createContext } from 'react';
import { Questions } from 'models/types';

export const QuestionsContext = 
    createContext<Questions>([]);