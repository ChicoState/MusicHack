import alt from '../alt';
import SpotifyPlaylistActions from '../actions/SpotifyPlaylistActions';
import SpotifyAuthStore from '../stores/SpotifyAuthStore';
import SpotifyWebApi from 'spotify-web-api-js';

class SpotifyPlaylistStore {
  constructor() {
    this.playlists = [];
    this.bindListeners({
      updatePlaylists: SpotifyPlaylistActions.UPDATE_PLAYLISTS,
      addSongToPlaylist: SpotifyPlaylistActions.ADD_SONG_TO_PLAYLIST,
    });
  }

  updatePlaylists() {
    setTimeout(() => {
      const token = SpotifyAuthStore.getState().accessToken;
      const spotify = new SpotifyWebApi();
      spotify.setAccessToken(token);
      spotify.getUserPlaylists().then(playlists => {
        this.setState({playlists: playlists});
      });
    }, 2000);
  }

  addSongToPlaylist(info) {
    this.waitFor(SpotifyAuthStore);
    setTimeout(() => {
      const token = SpotifyAuthStore.getState().accessToken;
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json');

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      const url = `https://api.spotify.com/v1/playlists/${info[0]}/tracks?uris=${info[1]}`;
      console.log(url);
      fetch(url, requestOptions)
        .then(response => {
          this.updatePlaylists();
        })
        .catch(error => console.log(`error: ${error}`));
    }, 2000);
  }

  // createPlaylist() {
  //   this.waitFor(SpotifyAuthStore);
  //   const token = SpotifyAuthStore.getState().accessToken;
  //   const spotify = new SpotifyWebApi();
  //   spotify.setAccessToken(token);
  // }
}

export default alt.createStore(SpotifyPlaylistStore, 'SpotifyPlaylistStore');
