import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders header', () => {
  const wrapper = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const headerText = wrapper.getByText('Quiz Game!');
  expect(headerText).toBeInTheDocument();
});
