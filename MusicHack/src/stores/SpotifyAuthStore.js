import alt from '../alt';
import SpotifyAuthActions from '../actions/SpotifyAuthActions';
import * as React from 'react-native';

class SpotifyAuthStore {
  constructor() {
    this.accessToken = null;
    this.refreshToken = null;
    this.exportPublicMethods({
      getAccessToken: this.getAccessToken,
    });
    React.AsyncStorage.multiGet(
      ['@Spotify_access', '@Spotify_refresh'],
      (error, result) => this.onLoad(result),
    );

    this.bindListeners({
      setTokens: SpotifyAuthActions.SET_TOKENS,
    });
  }

  setTokens = (accessToken, refreshToken) => {
    const accessPair = ['@Spotify_access', accessToken.toString()];
    const refreshPair = ['@Spotify_refresh', refreshToken.toString()];
    console.log('Saving to Async Storage');
    return React.AsyncStorage.multiSet([accessPair, refreshPair])
      .then(() => {
        console.log('Successfully saved to Async Storage');
        this.setState({
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      })
      .catch(e => {
        throw e;
      });
  };

  onLoad(tokens) {
    if (tokens) {
      this.setState({
        accessToken: tokens[0][1],
        refreshToken: tokens[1][1],
      });
    }
  }

  getAccessToken() {
    return Promise.resolve().then(() => {
      while (this.accessToken == undefined || this.accessToken == null) {}
      console.log(this.accessToken);
      return this.accessToken;
    });
  }
}

export default alt.createStore(SpotifyAuthStore, 'SpotifyTokenStore');
