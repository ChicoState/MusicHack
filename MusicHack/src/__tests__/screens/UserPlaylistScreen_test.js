import React from 'react';
import UserPlaylistsScreen from '../../screens/UserPlaylistsScreen';

import renderer from 'react-test-renderer';

beforeAll(() => {
  UserPlaylistsScreen.prototype.componentDidMount = () => {};
});

test('renders correctly', () => {
  const tree = renderer.create(<UserPlaylistsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
