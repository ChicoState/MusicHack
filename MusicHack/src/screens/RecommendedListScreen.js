import React from 'react';
import {SafeAreaView} from 'react-native';

import RecommendedSongsList from '../components/RecommendedSongsList';

function RecommendedListScreen() {
  return (
      <SafeAreaView>
          <RecommendedSongsList />
      </SafeAreaView>
  );
}

export default RecommendedListScreen;
