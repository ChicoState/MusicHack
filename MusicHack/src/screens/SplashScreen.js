import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SpotifyTokenStore from '../stores/SpotifyTokenStore';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = SpotifyTokenStore.getState();
    this.onChange = this.onChange.bind(this);
    this.timer = null;
  }
  componentDidMount() {
    SpotifyTokenStore.listen(this.onChange);
    this.navigateToAuth();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    SpotifyTokenStore.unlisten(this.onChange);
  }

  onChange(state) {
    console.log('on Changed Called');
    this.setState(state);
  }

  navigateToAuth() {
    // Splash screen will remain visible for 2 seconds
    this.timer = setTimeout(() => {
      console.log(this.state);
      if (this.state.accessToken != null) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    }, 2000);
  }

  render() {
      return (
        <View style={styles.container}>
        <Text style={styles.textStyle}>Music Hack</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  textStyle: {
      fontSize: 50,
      fontWeight: 'bold',
      textShadowColor: '#00f',
      textShadowRadius: 7,
  },
});

export default Splash;
