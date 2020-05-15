import React from 'react';
import SplashScreen from '../../screens/SplashScreen';

import renderer from 'react-test-renderer';

beforeAll(() => {
  SplashScreen.prototype.componentDidMount = () => {};
});

test('renders correctly', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
