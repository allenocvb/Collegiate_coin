import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Challenges from './Challenges';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Challenges} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
