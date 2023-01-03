import { render, waitFor } from '@testing-library/react';
import { MainContext } from 'contexts';
import { questions } from 'mocks/question';
import { categories } from 'mocks/category';
import { server } from 'mocks/server';

import Board from './Board';

describe('board', () => {
	beforeAll(() => server.listen())
	test('renders loader ', async () => {
	  const wrapper = render(
	  	<MainContext.Provider value={{questions, categories}}>
	  		<Board />
	  	</MainContext.Provider>
	  );

	  const loadingText = wrapper.getByText('Loading ...');
	  expect(loadingText).toBeInTheDocument();
	});

	test('renders categories ', async () => {
	  const wrapper = render(
	  	<MainContext.Provider value={{questions, categories}}>
	  		<Board />
	  	</MainContext.Provider>
	  );

	  await waitFor(() => expect(wrapper.getByText('Authors')).toBeVisible());
	});
});
