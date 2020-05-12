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
    this.waitFor(SpotifyAuthStore);
    setTimeout(() => {
      const token = SpotifyAuthStore.getState().accessToken;
    //console.log(`Token: ${token}`);
      const spotify = new SpotifyWebApi();
      spotify.setAccessToken(token);
      spotify.getUserPlaylists().then(playlists => {
        this.setState({playlists: playlists});
      });
    }, 2000);
  }

  addSongToPlaylist(playlist, songs) {
      console.log('Playlist: ' + playlist + ' Song: ' + songs);
      this.waitFor(SpotifyAuthStore);
      setTimeout(() => {
        const token = SpotifyAuthStore.getState().accessToken;
        const spotify = new SpotifyWebApi();
        spotify.setAccessToken(token);
        spotify.addTracksToPlaylist(playlist, songs).then(ses_id => {
          spotify.getUserPlaylists().then(playlists => {
            console.log(playlists);
            this.setState({playlists: playlists});
          });
        });
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
