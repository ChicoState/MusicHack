import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import 'react-native-get-random-values';
import {WebView} from 'react-native-webview';
import SpotifyTokenActions from '../actions/SpotifyTokenActions';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.loginURL = 'http://ec2-18-216-114-252.us-east-2.compute.amazonaws.com';
    this.state = {
      isComplete: false,
      isAuthorizing: false,
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
        <View>
          <Button title="Connect Accounts" onPress={this._signIn} />
          <Button
            marginVertical="20"
            title="Continue as guest"
            onPress={this.guestAccess}
          />
        </View>
      );
    } else {
      view = (
        <WebView
          source={{uri: this.loginURL}}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      );
    }
    return view;
  }

  _signIn = () => {
    this.setState({_isAuthorizing: true});
    //await AsyncStorage.setItem('userToken', 'abc');
    //this.props.navigation.navigate('Menu');
  };

  onNavigationStateChange(webViewState) {
    const url = webViewState.url;
    const endpoint = url.split('/')[3].substring(0, 13);
    if (endpoint === '#access_token') {
      const rgxAccess = RegExp('access_token=\\S+(?=&)');
      const rgxRefresh = RegExp('refresh_token=\\S+$');
      const accessToken = url.match(rgxAccess)[0].split('=')[1];
      const refreshToken = url.match(rgxRefresh)[0].split('=')[1];
      SpotifyTokenActions.setInitialTokens(accessToken, refreshToken);
      this.props.navigation.navigate('App');
    }
  }

  guestAccess = () => {
    this.props.navigation.navigate('App');
  };
}
const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
  viewStyle: {
    marginVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
