import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SpotifyPlaylistStore from '../stores/SpotifyPlaylistStore';
import SpotifyPlaylistActions from '../actions/SpotifyPlaylistActions';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = SpotifyPlaylistStore.getState();
    this.onChange = this.onChange.bind(this);
    this.timer = null;
  }

  componentDidMount() {
    console.log('loading playlists');
    SpotifyPlaylistActions.updatePlaylists();
  }

  onChange(state) {
    console.log('on Changed Called');
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    );
  }
}

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
