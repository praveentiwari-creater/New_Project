import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { createSwitchNavigator } from '@react-navigation/switch';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import home_page from './Testing/home_page';
import dratab1 from './Testing/dratab1';
import Image_Uploading from './Testing/Image_Uploading';
import dratab3 from './Testing/dratab3';
import API from './Testing/API';
import TextInput from './Testing/SubFile_(API.JS)';
import Login_Page from './Testing/Login_Page';
import SignUp from './Testing/SignUp';
import Update_Password from './Testing/Update_Password';
import Forgate_Password from './Testing/Forgate_Password';
import Date_Picker from './Testing/Date_Picker';
import Country_Picker from './Testing/Country_Picker';
import Pagination from './Testing/Pagination';
import PaginationReferesh from './Testing/PaginationReferesh';
// import Google_Login from './Testing/Google_Login';
import INDEX_async from './Testing/INDEX_async';
import { State } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tokenvalue: ''
    }
  }
  async componentDidMount() {
    this.setState({ tokenvalue: await AsyncStorage.getItem('token') });
    console.log("token value ========>", this.state.tokenvalue);
    {
      this.state.tokenvalue != null ?<Stack.Screen name="Login_Page" component={Login_Page} />:
      <Stack.Screen name="Home_Drawer" component={Home_Drawer} />
    }
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home_Drawer" component={Home_Drawer} />
         <Stack.Screen name="Login_Page" component={Login_Page} />
            
          <Stack.Screen name="SignUp" component={SignUp} />
 <Stack.Screen name="demo" component={demo} />
 <Stack.Screen name="Forgate_Password" component={Forgate_Password} />

 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
function demo({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Image_Uploading" component={Image_Uploading} />
      <Tab.Screen name="dratab3" component={dratab3} />
    </Tab.Navigator>
  );
}
function Home_Drawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="home_page">
      <Drawer.Screen name="home_page" component={home_page} />
      <Drawer.Screen name="demo" component={demo} />
      <Drawer.Screen name="Image_Uploading" component={Image_Uploading} />
      <Drawer.Screen name="dratab3" component={dratab3} />
      <Drawer.Screen name="API" component={API} />
      <Drawer.Screen name="TextInput" component={TextInput} />
      <Drawer.Screen name="Update_Password" component={Update_Password} />
      <Drawer.Screen name="Date_Picker" component={Date_Picker} />
      <Drawer.Screen name="Country_Picker" component={Country_Picker} />
      <Drawer.Screen name="Pagination" component={Pagination} />
      <Drawer.Screen name="PaginationReferesh" component={PaginationReferesh} />
      {/* <Drawer.Screen name="Google_Login" component={Google_Login} /> */}
     
    </Drawer.Navigator>
  );
}
function tab({ navigation }) {
  return (

    <Tab.Navigator>
      <Tab.Screen name="fun" component={fun} />
      <Tab.Screen name="tec" component={tec} />
    </Tab.Navigator>
  );
}