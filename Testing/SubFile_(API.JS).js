import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default class TextItem extends Component {
   render(){
      const {ID}=this.props.route.params;
    return (
  
     
      <View>
        <TextInput style={{ width:300,height:60,borderColor:"lightblue",borderWidth:5,margin:60}} 
        onChangeText={ID}
        value={ID}
        />
      </View>
    );
  
  }
}
