/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import RecommendedListScreen from './src/screens/RecommendedListScreen';
import SignInScreen from './src/screens/SignInScreen';
import Splash from './src/screens/SplashScreen';
import Menu from './src/components/Menu';



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Menu: Menu,
    Top: RecommendedListScreen,
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none',
    defaultNavigationOptions: {},
  },
);

const AuthNavigator = createStackNavigator(
  {
    Login: SignInScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    defaultNavigationOptions: {},
  }
);

/*
const SplashNavigator = createStackNavigator(
  {
    Splash: Splash
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    defaultNavigationOptions: {},
  }
);
*/
const navigator = createSwitchNavigator(
  {
    Splash: Splash,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Splash',
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
