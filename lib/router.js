import React from 'react';  
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "../screens/index";  
import ProfileScreen from "../screens/profile";  
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Discover" component={HomeScreen} />
        <Tab.Screen name="Following" component={ProfileScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    );
  }