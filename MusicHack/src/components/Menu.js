import React from 'react';
import {DrawerActions} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon, Header} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import RecommendedListScreen from '../screens/RecommendedListScreen';
import RecommendedSongsList from './RecommendedSongsList';



const Menu = createDrawerNavigator (
    {
      Home:{
        screen:HomeScreen
      },
      List:{
        screen:RecommendedListScreen
      }
    },{
        initialRouteName:'Home'
    }
);

export default Menu;

