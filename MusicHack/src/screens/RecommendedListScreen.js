import React from 'react';
import {Text, SafeAreaView, StatusBar, StyleSheet, View, FlatList} from 'react-native';

import RecommendedSongsList from '../components/RecommendedSongsList';

const RecommendedListScreen = () => {
  
  return (
  //<StatusBar barStyle="light-content" />
	<SafeAreaView>
        <RecommendedSongsList />
	</SafeAreaView>
  )

};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
});

export default RecommendedListScreen;