import { render } from '@testing-library/react';
import { categoryOne } from 'mocks/category';
import Category, { CategoryProps } from './Category';

test('renders Category', () => {
  const props: CategoryProps = { category: categoryOne };

  const wrapper = render(<Category {...props} />);
  const headerText = wrapper.getByText('State Facts');
  expect(headerText).toBeInTheDocument();
});
