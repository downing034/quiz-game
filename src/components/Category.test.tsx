import { render } from '@testing-library/react';
import { CategoryOne } from 'mocks/category';
import Category, { CategoryProps } from './Category';

test('renders Category', () => {
  const props: CategoryProps = { category: CategoryOne };

  const wrapper = render(<Category {...props} />);
  const headerText = wrapper.getByText('State Facts');
  expect(headerText).toBeInTheDocument();
});
