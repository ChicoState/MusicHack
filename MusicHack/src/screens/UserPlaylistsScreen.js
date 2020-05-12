import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import SpotifyPlaylistStore from '../stores/SpotifyPlaylistStore';
import SpotifyPlaylistActions from '../actions/SpotifyPlaylistActions';
import SpotifyPlaylist from '../components/SpotifyPlaylist.js';

class UserPlaylistsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = SpotifyPlaylistStore.getState();
    this.onChange = this.onChange.bind(this);
    this.timer = null;
  }

  componentDidMount() {
    SpotifyPlaylistStore.listen(this.onChange);
    SpotifyPlaylistActions.updatePlaylists();
  }

  componentWillUnmount() {
    SpotifyPlaylistStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <View style={styles.viewStyle}>
        <FlatList
          contentInsetAdjustmentBehavior="automatic"
          data={this.state.playlists.items}
          renderItem={({item}) => (
            <SpotifyPlaylist
              name={item.name}
              tracks={item.tracks.total}
            />
          )}
          keyExtractor={item => `${item.name}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserPlaylistsScreen;
