import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Music Hack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
