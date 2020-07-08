import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import home from './Testing/home';
import dratab1 from './Testing/dratab1';
import dratab2 from './Testing/dratab2';
import dratab3 from './Testing/dratab3';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="demoPage" component={drawerDemo} />
        <Stack.Screen name="demo" component={demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


function demo({ navigation }) {
    return (
      <Tab.Navigator>
     <Tab.Screen name="dratab2" component={dratab2} />
     <Tab.Screen name="dratab3" component={dratab3} />
   </Tab.Navigator>
    );
  }

  function drawerDemo({ navigation }) {
    return (
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={home} />
        <Drawer.Screen name="demo" component={demo} />
        <Drawer.Screen name="dratab2" component={dratab2} />
        <Drawer.Screen name="dratab3" component={dratab3} />
      </Drawer.Navigator>
    );
  }


























