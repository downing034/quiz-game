import { render } from '@testing-library/react';
import Loader from './Loader';

test('renders Loader', () => {
  const wrapper = render(<Loader />);
  const headerText = wrapper.getByText('Loading ...');
  expect(headerText).toBeInTheDocument();
});
