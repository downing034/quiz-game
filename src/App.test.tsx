import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const wrapper = render(<App />);
  const headerText = wrapper.getByText('Quiz Game!');
  expect(headerText).toBeInTheDocument();
});
