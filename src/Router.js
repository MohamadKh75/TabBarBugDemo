import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { A, B, C } from './screens';
import { TabBar } from './components';

const FirstStack = createStackNavigator(
  {
    A,
    C
  },
  {
    initialRouteName: 'A',
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

const SecondStack = createStackNavigator(
  {
    B
  },
  {
    initialRouteName: 'B',
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    First: FirstStack,
    Second: SecondStack
  },
  {
    initialRouteName: 'Second',
    tabBarComponent: TabBar,
    lazy: false
  }
);

export default createAppContainer(MainNavigator);
