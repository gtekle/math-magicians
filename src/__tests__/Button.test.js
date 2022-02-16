import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

it('Button component renders correctly', () => {
  const handleButtonClick = (name) => name;
  const tree = renderer
    .create(<Button clickHandler={handleButtonClick} name="AC" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
