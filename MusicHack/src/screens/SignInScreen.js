import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button
          title="Connect Accounts"
          onPress={this._signInAsync}
        />
        <Button
          marginVertical='20'
          title="Continue as guest"
          onPress={this.guestAccess}
        />
      </View>
    );
  }

  _signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    //this.props.navigation.navigate('Menu');
  };


  guestAccess = async () => {
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
