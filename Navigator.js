import { createStackNavigator } from 'react-navigation';

import { HomeScreen, ListScreen } from './src/screens/index';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    List: {
      screen: ListScreen,
      navigationOptions: {
        title: 'List'
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default Navigator;
