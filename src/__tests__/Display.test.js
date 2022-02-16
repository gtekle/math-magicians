import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

it('Display component renders correctly', () => {
  const tree = renderer
    .create(<Display text="9" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
