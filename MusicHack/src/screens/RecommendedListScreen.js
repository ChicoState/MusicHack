import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import RecommendedSongsList from '../components/RecommendedSongsList';

const RecommendedListScreen = () => {
  return (
    //<StatusBar barStyle="light-content" />
    <SafeAreaView>
      <RecommendedSongsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default RecommendedListScreen;
