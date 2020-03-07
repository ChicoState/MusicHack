import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class RecommendedSongRow extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text>{this.props.title} -- {this.props.artist}</Text>
		<Image source = {{uri: this.props.artwork}} style = {{width: 300, height: 300}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	marginBottom: 15,
  },
});
