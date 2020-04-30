import alt from '../alt';
import SpotifyPlaylistActions from '../actions/SpotifyPlaylistActions';
import SpotifyAuthStore from '../stores/SpotifyAuthStore';
import SpotifyWebApi from 'spotify-web-api-js';

class SpotifyPlaylistStore {
  constructor() {
    this.playlists = [];
    this.bindListeners({
      updatePlaylists: SpotifyPlaylistActions.UPDATE_PLAYLISTS,
    });
  }

  updatePlaylists() {
    this.waitFor(SpotifyAuthStore);
    const token = SpotifyAuthStore.getState.accessToken;
    const spotify = new SpotifyWebApi();
    spotify.setAccessToken(token);
    return spotify.getUserPlaylists().then(playlists => {
      this.setState({playlists: playlists});
    });
  }
}

export default alt.createStore(SpotifyPlaylistStore, 'SpotifyPlaylistStore');
