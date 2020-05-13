'use strict';

import alt from '../alt';

class SpotifyPlaylistActions {
  constructor() {
    this.generateActions('updatePlaylists', 'addSongToPlaylist');
  }
}

export default alt.createActions(SpotifyPlaylistActions);
