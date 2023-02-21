import { Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import useQuestion from './useQuestion';
import "styles/app.css";
import "styles/question.css";

export interface QuestionValueProps {
	categoryId: number;
	questionValue: number;
};

const QuestionValue = ({ categoryId, questionValue }: QuestionValueProps) => {
	const { spacing } = useTheme();
	const question = useQuestion(Number(categoryId), Number(questionValue));
	const questionLink = `category/${categoryId}/question/${question.value}`;

	const hasBeenAnswered = question.clicked;

	if (hasBeenAnswered) {
		return (
			<Box width="100%">
					<Box
						width="100%"
						height="150px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						marginTop={spacing(0.5)}
						className="question-box"
					/>
			</Box>
		)
	} else {
		return (
			<Box width="100%">
				<Link to={questionLink} className="link">
					<Box
						width="100%"
						height="150px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						marginTop={spacing(0.5)}
						className="question-box"
					>
						<h1 className="question-value">${questionValue}</h1>
					</Box>
				</Link>
			</Box>
		)
	};
};
export default QuestionValue;