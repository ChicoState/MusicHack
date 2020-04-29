'use strict';

import alt from '../alt';


class SpotifyPlaylistActions {
  constructor() {
    this.generateActions('updatePlaylists');
  }
}

export default alt.createActions(SpotifyPlaylistActions);
