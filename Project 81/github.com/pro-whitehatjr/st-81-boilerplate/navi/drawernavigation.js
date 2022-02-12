import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile.js';
import BottomTabNavigator from './tabnavigation.js';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={BottomTabNavigator} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
};
