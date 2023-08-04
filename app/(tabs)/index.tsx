import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Challenges from './Challenges';
import ProfileScreen from './ProfileScreen';
import Leaderboard from './leaderboard';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Challenges" component={Challenges} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Tabs;
