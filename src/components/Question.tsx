import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import useQuestion from './useQuestion';
import useCategory from './useCategory';
import CategoryHeader from './CategoryHeader';
import 'styles/question.css';

const Question = () => {
	let navigate = useNavigate();
	const { categoryId, questionValue } = useParams();
	const question = useQuestion(Number(categoryId), Number(questionValue));
	const category = useCategory(Number(categoryId));

	const [showAnswer, setShowAnswer] = useState<boolean>(false);

	const handleButtonClick = () => {
		if (showAnswer) {
			// fix me
			navigate('/')
		} else {
			setShowAnswer(true)
			question.clicked = true;
		}
	}

	return (
		<Box
			className="quesiton-view"
			minWidth="70%"
			marginLeft="auto"
			marginRight="auto"
		>
			<Paper variant="outlined" square>
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					paddingBottom={2}
					className="question-view"
				>
					<CategoryHeader name={category.name} />

					<Box height="60px" margin={2}>
						<h2>{ showAnswer ? question.answerText : question.questionText}</h2>
					</Box>

					<Button variant="contained" color="warning" onClick={() => handleButtonClick()}>{ showAnswer ? 'Back to Board' : 'Reveal' }</Button>
					
				</Box>
			</Paper>
		</Box>
		
	)
};
export default Question;