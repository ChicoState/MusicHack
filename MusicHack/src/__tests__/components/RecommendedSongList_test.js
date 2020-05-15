import React from 'react';
import RecommendedSongsList from '../../components/RecommendedSongsList';

import renderer from 'react-test-renderer';

beforeAll(() => {
  RecommendedSongsList.prototype.componentDidMount = () => {};
});

test('renders correctly', () => {
  const tree = renderer.create(<RecommendedSongsList />).toJSON();
  expect(tree).toMatchSnapshot();
});
