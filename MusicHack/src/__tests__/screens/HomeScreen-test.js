import React from 'react';
import HomeScreen from '../../screens/HomeScreen';

import renderer from 'react-test-renderer';

beforeAll(() => {
  HomeScreen.prototype.componentDidMount = () => {};
});

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
