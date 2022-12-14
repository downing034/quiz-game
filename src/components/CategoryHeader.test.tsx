import { render } from '@testing-library/react';
import CategoryHeader, { CategoryHeaderProps } from './CategoryHeader';

test('renders CategoryHeader', () => {
  const props: CategoryHeaderProps = { name: 'State Facts' };

  const wrapper = render(<CategoryHeader {...props} />);
  const headerText = wrapper.getByText('State Facts');
  expect(headerText).toBeInTheDocument();
});
