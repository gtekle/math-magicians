import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Calculator from '../components/Calculator';

it('Calculator component renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Calculator button click displays button\'s value in the display', async () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('9'));

  expect(screen.getByTestId('display')).toHaveTextContent('9');
});
