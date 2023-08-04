import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './index';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}