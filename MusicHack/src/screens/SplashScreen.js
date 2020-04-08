import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Splash extends Component {

async componentDidMount() {
// You can load api data or any other thing here if you want
  const data = await this.navigateToHome();
  if (data !== null) {
    this.props.navigation.navigate('Auth');
  }
}

navigateToHome = async () => {
  // Splash screen will remain visible for 2 seconds
  const wait = time => new Promise((resolve) => setTimeout(resolve, time));
  return wait(2000).then(() => this.props.navigation.navigate('Auth'))
};

render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>Music Hack</Text>
      </View>
    );
}}

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
