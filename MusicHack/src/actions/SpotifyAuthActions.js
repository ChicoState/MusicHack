'use strict';

import alt from '../alt';

class SpotifyAuthActions {
  constructor() {
    this.generateActions('setTokens');
  }
}

export default alt.createActions(SpotifyAuthActions);
