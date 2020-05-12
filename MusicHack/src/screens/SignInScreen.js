import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import 'react-native-get-random-values';
import {WebView} from 'react-native-webview';
import SpotifyAuthActions from '../actions/SpotifyAuthActions';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.loginURL = 'http://ec2-18-216-114-252.us-east-2.compute.amazonaws.com';
    this.state = {
      _isAuthorizing: false,
    };
  }
  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const isAuthoizing = this.state._isAuthorizing;
    let view;
    if (isAuthoizing === false) {
      view = (
        <View style={styles.viewStyle}>
          <Button
          color ='#44c'
          title="Connect Spotify Account"
          onPress={this._signIn} />
        </View>
      );
    } else {
      view = (
        <WebView
          source={{uri: this.loginURL}}
          onNavigationStateChange={this._onNavigationStateChange}
        />
      );
    }
    return view;
  }

  _signIn = () => {
    this.setState({_isAuthorizing: true});
  };

  _onNavigationStateChange = webViewState => {
    const url = webViewState.url;
    const endpoint = url.split('/')[3].substring(0, 13);
    if (endpoint === '#access_token') {
      const rgxAccess = RegExp('access_token=\\S+(?=&)');
      const rgxRefresh = RegExp('refresh_token=\\S+$');
      const accessToken = url.match(rgxAccess)[0].split('=')[1];
      const refreshToken = url.match(rgxRefresh)[0].split('=')[1];
      SpotifyAuthActions.setTokens(accessToken, refreshToken);
      this.navigateToHome();
    }
  };

  guestAccess = () => {
    this.navigateToHome();
  };

  navigateToHome = () => {
    this.props.navigation.navigate('App');
  };
}
const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
  viewStyle: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
