import { render, waitFor } from '@testing-library/react';
import { MainContext } from 'contexts';
import { clues } from 'mocks/clue';
import { categories } from 'mocks/category';
import { server } from 'mocks/server';

import Board from './Board';

describe('board', () => {
	const setClues = jest.fn();

	beforeAll(() => server.listen())
	test('renders loader ', async () => {
	  const wrapper = render(
	  	<MainContext.Provider value={{clues, setClues, categories}}>
	  		<Board />
	  	</MainContext.Provider>
	  );

	  const loadingText = wrapper.getByText('Loading ...');
	  expect(loadingText).toBeInTheDocument();
	});

	test('renders categories ', async () => {
	  const wrapper = render(
	  	<MainContext.Provider value={{clues, setClues, categories}}>
	  		<Board />
	  	</MainContext.Provider>
	  );

	  await waitFor(() => expect(wrapper.getByText('Authors')).toBeVisible());
	});
});
