'use strict';

import alt from '../alt';

class SpotifyTokenActions {
  constructor() {
    this.generateActions('getTokens', 'setTokens');
  }
}

export default alt.createActions(SpotifyTokenActions);
