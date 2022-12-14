import { render, waitFor } from '@testing-library/react';
import { QuestionsContext } from 'contexts';
import { questionOne, questionTwo, questions } from 'mocks/question';
import { server } from 'mocks/server';

import Board from './Board';

describe('board', () => {
	beforeAll(() => server.listen())
	test('renders loader ', async () => {
	  const wrapper = render(
	  	<QuestionsContext.Provider value={questions}>
	  		<Board />
	  	</QuestionsContext.Provider>
	  );

	  const loadingText = wrapper.getByText('Loading ...');
	  expect(loadingText).toBeInTheDocument();
	});

	test('renders categories ', async () => {
	  const wrapper = render(
	  	<QuestionsContext.Provider value={questions}>
	  		<Board />
	  	</QuestionsContext.Provider>
	  );

	  await waitFor(() => expect(wrapper.getByText('Authors')).toBeVisible());
	});
});
