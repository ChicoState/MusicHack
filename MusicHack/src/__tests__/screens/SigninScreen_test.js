import React from 'react';
import SignInScreen from '../../screens/SignInScreen';

import renderer from 'react-test-renderer';

beforeAll(() => {
  SignInScreen.prototype.componentDidMount = () => {};
});

test('renders correctly', () => {
  const tree = renderer.create(<SignInScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
