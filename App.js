import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  createMaterialTopTabNavigator,
  createAppContainer,
  MaterialTopTabBar,
} from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function SafeAreaMaterialTopTabBar(props) {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
}

const mainNavigation = createMaterialTopTabNavigator(
  {
    Login,
    Dashboard,
  },
  {
    tabBarComponent: SafeAreaMaterialTopTabBar,
    tabBarOptions: {
      tabStyle: {
        backgroundColor: '#7159c1',
      },
    },
  },
);

export default createAppContainer(mainNavigation);