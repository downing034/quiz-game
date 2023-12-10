import { render } from '@testing-library/react';
import CategoryHeader, { CategoryHeaderProps } from './CategoryHeader';

test('renders CategoryHeader', () => {
  const props: CategoryHeaderProps = { title: 'State Facts' };

  const wrapper = render(<CategoryHeader {...props} />);
  const headerText = wrapper.getByText('STATE FACTS');
  expect(headerText).toBeInTheDocument();
});
