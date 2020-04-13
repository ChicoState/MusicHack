import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  componentDidMount() {
    this.navigateToAuth();;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  navigateToAuth() {
    // Splash screen will remain visible for 2 seconds
    this.timer = setTimeout(() => {this.props.navigation.navigate('Auth');},2000);

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
