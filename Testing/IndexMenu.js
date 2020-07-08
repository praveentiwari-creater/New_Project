import React from 'react';
import { createAppContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuBarScreen from './MenuBarScreen';


const MyDrawerNavigator = createDrawerNavigator({
  home:{
    screen: MenuBarScreen,
  }
});

export default createAppContainer(MyDrawerNavigator);
  
  



