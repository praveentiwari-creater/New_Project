import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Home from './Testing/home';(when you want to go another class the import this,and call class name);
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home1">
        <Drawer.Screen name="Home1" component={Home1} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="fun" component={fun}/>
        <Drawer.Screen name="tech" component={tech}/>


      </Drawer.Navigator>
    </NavigationContainer>

  );
}
export default App;


function Home1({ navigation }) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}
          style={{ alignItems: 'flex-start', margin: 16 }}
        >
          <Image source={require('./Testing/Icons/menu.png')} />
        </TouchableOpacity>
      </View>
      <Button title='Menu' onPress={() => navigation.navigate("Details")} />
      <Text>
        Hello Home Page
  </Text>
    </View>

  );
}

function Details({ navigation }) {
  return (
    <View>
      <Text>
        Hello mr' Developer
    </Text>
    </View>
  );

}

function fun({ navigation }) {
  return (
    <View>
      <Text>
        Hello mr' Developer
    </Text>
    </View>
  );

}

function tech({ navigation }) {
  return (
    <View>
      <Text>
        Hello mr' Developer(perfect)
    </Text>
    </View>
  );

}
