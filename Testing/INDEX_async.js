import React,{Component} from 'react';
import {Text,View,Button,AsyncStorage} from 'react-native';
export default class INDEX_async extends Component{
   
   
    test=async ()=>{
        
    let value = await AsyncStorage.getItem(token);
    if (value !== null) {
        console.log(value);
      this.props.navigation.navigate("demoPage");
      
    }
    else{
      this.props.navigation.navigate("Login_Page");
    }
}
    render()
    {

    return (
  
     
        <View>
        <Text style={{fontSize:40}}>
          Hello Testing
      </Text>
      </View>
    );
  
  }
    }