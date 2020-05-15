import React from 'react';
import SpotifyPlaylist from '../../components/SpotifyPlaylist';

import renderer from 'react-test-renderer';

beforeAll(() => {
  SpotifyPlaylist.prototype.componentDidMount = () => {};
});

test('renders correctly', () => {
  const tree = renderer.create(<SpotifyPlaylist />).toJSON();
  expect(tree).toMatchSnapshot();
});
