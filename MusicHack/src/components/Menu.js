import {createDrawerNavigator} from 'react-navigation-drawer';
import UserPlaylistsScreen from '../screens/UserPlaylistsScreen';
import RecommendedListScreen from '../screens/RecommendedListScreen';

const Menu = createDrawerNavigator(
  {
    Playlists: {
      screen: UserPlaylistsScreen,
    },
    Recommended: {
      screen: RecommendedListScreen,
    },
  },
  {
    initialRouteName: 'Playlists',
  },
);

export default Menu;
