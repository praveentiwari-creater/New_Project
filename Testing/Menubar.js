import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Programme1 from './Testing/Programme1';
import home from './Testing/home';
import tec from './Testing/tec';
import Newtest from './Testing/Newtest';
import navig from './Testing/navig';
import Menubar from './Testing/Menubar';
import turnpage from './Testing/turnpage';

import {Image,StyleSheet,Button,LogoTitle} from 'react-native';


const _Stack = createStackNavigator();

function aApp() {
  return (
    <NavigationContainer>
        <_Stack.Navigator>
        
      <_Stack.Screen name="new_team" component={Programme1} />
      <_Stack.Screen name="homepage" component={home} />
      <_Stack.Screen name="teacher" component={tec}  options={{title:'ask' ,  headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="green"/>)}}/>
      <_Stack.Screen name="tt" component={Newtest}  options={{title: 'newpage', headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'blue',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      
      <_Stack.Screen name="photo" component={navig} />
     
     
     
         </_Stack.Navigator>
    
      
    
    </NavigationContainer>
    
  );
}
const Drawer = createDrawerNavigator();
    function demo(){
      return (
        <NavigationContainer>
<Drawer.Navigator initialRouteName="turnpage"> 
          <Drawer.Screen name="turnpage" component={turnpage} options={{title:'',headerLeft:()=>( <Button
         onPress={() => alert('This is a button!')}
         title="Info"
        color="green"/>)}}/>
 
 
 </Drawer.Navigator>
        </NavigationContainer>
        
 
      );
      
    }



  
export default App;

