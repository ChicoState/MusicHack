import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import RecommendedListScreen from '../screens/RecommendedListScreen';

const Menu = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    List: {
      screen: RecommendedListScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Menu;
