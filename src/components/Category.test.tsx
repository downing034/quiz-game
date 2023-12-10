import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { categoryOne } from 'mocks/category';
import Category, { CategoryProps } from './Category';

test('renders Category', () => {
  const props: CategoryProps = { category: categoryOne };

  const wrapper = render(
    <BrowserRouter>
      <Category {...props} />
    </BrowserRouter>
  );

  const headerText = wrapper.getByText('STATE FACTS');
  expect(headerText).toBeInTheDocument();
});
