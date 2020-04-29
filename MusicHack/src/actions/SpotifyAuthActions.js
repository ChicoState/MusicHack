'use strict';

import alt from '../alt';

class SpotifyAuthActions {
  constructor() {
    this.generateActions('getTokens', 'setTokens');
  }
}

export default alt.createActions(SpotifyAuthActions);
