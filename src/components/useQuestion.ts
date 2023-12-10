import { useContext } from 'react';
import { Questions, MainContextType } from 'models/types';
import { newEmptyQuestion } from 'models/apiTyping';
import { MainContext } from 'contexts';

const useQuestion = (categoryId: number, questionValue: number) => {
	const data: MainContextType = useContext(MainContext);
	const allQuestions: Questions = data.questions;
	const question = allQuestions.find((q) => q.categoryId === categoryId && q.value === questionValue) ?? newEmptyQuestion();

	return question;
};

export default useQuestion;