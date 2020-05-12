import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class SpotifyPlaylist extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.textStyle}>
          {this.props.name}
        </Text>
        <Text style={styles.textStyle}>
          Total tracks: {this.props.tracks}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#aaa',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    textShadowColor: '#44c',
    textShadowRadius: 5,
    marginBottom: 20,
  },
  imageView: {
    width: 300,
    height: 300,
  },
});
