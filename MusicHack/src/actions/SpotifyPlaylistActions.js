'use strict';

import alt from '../alt';

class SpotifyPlaylistActions {
  constructor() {
    this.generateActions('updatePlaylists', 'createPlaylist');
  }
}

export default alt.createActions(SpotifyPlaylistActions);
