import React from 'react';
import { Prompt, Text, View, Image, StyleSheet, Button, TextInput,Separator } from 'react-native';
export default class tec extends React.Component {

    USER = () => {
        this.props.navigation.popToTop("new_team");
    };
   
    USER1 = () => {
        this.props.navigation.goBack("homepage");
    };
    USER2 = () => {
        this.props.navigation.navigate("tt",{Id:'abc2'})
    };
    
    render() {
        return (
            <View>
                <View>
                    <Text style={{ fontSize: 18 }}>Tecorb </Text>
                </View>
               
                <Text style={{ fontSize: 30 }}>Press me!</Text>
               
                <View style={styles.abc}/>
                <Button title="Go on Main Page" onPress={this.USER} />
                <View style={styles.abc}/>
                <Button title="Go backe" onPress={this.USER1} />
            
                <View style={styles.abc}/>
                <Button title=" newtest" onPress={this.USER2} />
                
                
                
            </View>
                  );
                }
}
const styles=StyleSheet.create({
    abc:{
        //flex:1,
        margin:20,
        padding:1,
    }
})

  


