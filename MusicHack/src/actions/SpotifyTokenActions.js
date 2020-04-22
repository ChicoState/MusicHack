'use strict';

import alt from '../alt';

class SpotifyTokenActions {
  constructor() {
    this.generateActions('setInitialToken');
    this.generateActions('updateToken');
    this.generateActions('getAceessToken');
    this.generateActions('getRefreshToken');
  }

  setInitialTokens(accessToken, refreshToken) {
    this.setSpotifyTokens(accessToken, refreshToken);
  }
}

export default alt.createActions(SpotifyTokenAction);
