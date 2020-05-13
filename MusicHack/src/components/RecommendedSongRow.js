import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';
import SpotifyPlaylistActions from '../actions/SpotifyPlaylistActions';
import SpotifyPlaylistStore from '../stores/SpotifyPlaylistStore';


export default class RecommendedSongRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: '',
      lists: SpotifyPlaylistStore.getState(),
    };
    this.updatePlaylist = playlist => {
      this.setState({playlist: playlist}, () => {
        console.log('Playlist id: ' + this.state.playlist);
        console.log('Song uri: ' + this.props.uri);
      });
    };
  }
  
  componentDidMount(){
    this.setState((state, props) => {
      return {playlist: this.state.lists.playlists.items[0].id};
    });
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Image style={styles.imageView} source={{uri: this.props.artwork}} />
        <Text style={styles.textStyle}>
          {this.props.title} -- {this.props.artist}
        </Text>
        <Text>Select playlist to add to:</Text>
        <Picker
          mode="dropdown"
          selectedValue={this.state.playlist}
          style={{height: 30, width: 250}}
          onValueChange={this.updatePlaylist}>
          {this.state.lists.playlists.items.map((item, index) => {
            return (
              <Picker.Item label={item.name} value={item.id} key={index} />
            );
          })}
        </Picker>
        <Button title="Add to playlist" color="#44c" onPress={this._addSong} />
      </View>
    );
  }

  _addSong = () => {
    console.log('ADDING');
    console.log('Playlist id: ' + this.state.playlist);
    console.log('Song uri: ' + this.props.uri);
    SpotifyPlaylistActions.addSongToPlaylist(
      this.state.playlist,
      this.props.uri,
    );
  };
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99c',
    marginBottom: 25,
    borderWidth: 5,
    borderColor: '#444',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    textShadowColor: '#a0f',
    textShadowRadius: 5,
    marginBottom: 10,
  },
  imageView: {
    width: 300,
    height: 300,
  },
});
