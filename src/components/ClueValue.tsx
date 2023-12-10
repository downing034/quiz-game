import { Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import useClue from './useClue';
import "styles/shared.css";
import "styles/clue.css";

export interface ClueValueProps {
	categoryId: number;
	clueValue: number;
};

const ClueValue = ({ categoryId, clueValue }: ClueValueProps) => {
	const { spacing } = useTheme();
	const clue = useClue(Number(categoryId), Number(clueValue));
	const clueLink = `category/${categoryId}/clue/${clue.value}`;

	const hasBeenAnswered = clue.clicked;

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
						className="clue-box"
						style={{ marginTop: '0px' }}
					/>
			</Box>
		)
	} else {
		return (
			<Box width="100%">
				<Link to={clueLink} className="link">
					<Box
						width="100%"
						height="150px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						marginTop={spacing(0.5)}
						className="clue-box"
						style={{ marginTop: '0px' }}
					>
						<h1 className="clue-value">${clueValue}</h1>
					</Box>
				</Link>
			</Box>
		)
	};
};
export default ClueValue;