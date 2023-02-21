import { useContext } from 'react';
import { Question, Questions, MainContextType } from 'models/types';
import { MainContext } from 'contexts';

const useCategoryQuestions = (categoryId: number) => {
	const data: MainContextType = useContext(MainContext);

	const allQuestions: Questions = data.questions;

	const categoryQuestions = allQuestions
		.filter((question: Question) => question.categoryId === categoryId)
		.sort((a: Question, b: Question) => {
			return a.value - b.value;
		});

	return categoryQuestions;
};

export default useCategoryQuestions;