import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import useClue from './useClue';
import useCategory from './useCategory';
import CategoryHeader from './CategoryHeader';
import 'styles/clue.css';

const Clue = () => {
	let navigate = useNavigate();
	const { categoryId, clueValue } = useParams();
	const clue = useClue(Number(categoryId), Number(clueValue));
	const category = useCategory(Number(categoryId));

	const [showAnswer, setShowAnswer] = useState<boolean>(false);

	const handleButtonClick = () => {
		if (showAnswer) {
			// fix me
			navigate('/')
		} else {
			setShowAnswer(true)
			clue.clicked = true;
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
					className="clue-view"
				>
					<CategoryHeader title={category.title} />

					<Box height="60px" margin={2}>
						<h2>{ showAnswer ? clue.answer : clue.question}</h2>
					</Box>

					<Button variant="contained" color="warning" onClick={() => handleButtonClick()}>{ showAnswer ? 'Back to Board' : 'Reveal' }</Button>
					
				</Box>
			</Paper>
		</Box>
		
	)
};
export default Clue;