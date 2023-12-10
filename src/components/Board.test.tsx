import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MainContext } from 'contexts';
import { clues } from 'mocks/clue';
import { categories } from 'mocks/category';
import { server } from 'mocks/server';

import Board from './Board';

describe('board', () => {
	const setClues = jest.fn();

	beforeAll(() => server.listen())

	test('renders categories ', async () => {
	  const wrapper = render(
			<BrowserRouter>
				<MainContext.Provider value={{clues, setClues, categories}}>
					<Board />
				</MainContext.Provider>
			</BrowserRouter>
	  );

	  await waitFor(() => expect(wrapper.getByText('STATE FACTS')).toBeVisible());
	});
});
