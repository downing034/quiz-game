import { render } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  const wrapper = render(<Header />);
  const headerText = wrapper.getByText('Quiz Game!');
  expect(headerText).toBeInTheDocument();
});
