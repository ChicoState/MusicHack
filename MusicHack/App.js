/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import UserPlaylistsScreen from './src/screens/UserPlaylistsScreen';
import RecommendedListScreen from './src/screens/RecommendedListScreen';
import SignInScreen from './src/screens/SignInScreen';
import Splash from './src/screens/SplashScreen';
import Menu from './src/components/Menu';

const AppNavigator = createStackNavigator(
  {
    Playlists: UserPlaylistsScreen,
    Menu: Menu,
    Recommended: RecommendedListScreen,
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
