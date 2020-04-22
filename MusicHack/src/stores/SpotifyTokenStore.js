import alt from '../alt';
import SpotifyTokenActions from '../actions/SpotifyTokenActions';

class SpotifyTokenStore {
  constructor() {
    this.accessToken = '';
    this.refreshToken = '';
    this.bindListeners({
      setTokens: SpotifyTokenActions.SET_TOKENS,
    });
  }

  setTokens(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}

export default alt.createStore(SpotifyTokenStore, 'SpotifyTokenStore');
