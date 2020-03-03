import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class RecommendedSongRow extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
