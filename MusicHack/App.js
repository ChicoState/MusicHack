/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import RecommendedSongsAction from '../actions/RecommendedSongsActions';

export default function App() {
  const [songs, setSongs] = useState([
    { key: 1, artist: 'The Beatles', title: 'Yellow Submarine', genre: 'Classic Rock', },
    { key: 2, artist: 'Post Malone', title: 'Circles', genre: 'Rap', },
    { key: 3, artist: 'The Weeknd', title: 'Heartless', genre: 'Pop', },
  ]);
  return (
    <>
    {/* <RecommendedSongsAction /> */}
      <View style={styles.container}>
        <TextInput style={styles.searchBox} />
        <ScrollView>
          { songs.map(val => (
              <View id={val.id}>
                <Text style={styles.songCell}>
                  <Text style={styles.artist}>{val.artist}</Text>
                  <Text style={styles.title}> {val.title} </Text>
                  <Text style={styles.genre}> ({val.genre})</Text>
                </Text>
              </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  songCell:{
    marginTop: 10,
    padding: 20,
    backgroundColor: '#ccc',
    fontSize: 20,
    
    // marginHorizontal: 10,
    // marginTop: 24,
  },
  artist:{
    fontWeight: 'bold',
  },
  title:{
    color: 'white',
  },
  genre:{
   fontStyle: 'italic',
  },
  searchBox:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 10
  },
});
