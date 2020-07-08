import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Forgate_Password extends Component {
    constructor(){
        super();
        this.state={
            Email:''
        }
    }
forgatepassword=()=>{
    let data = {
        email:this.state.Email
    }
    axios({
        method:'POST',
        url:'https://tecorbfirst.herokuapp.com/api/forgotpassword',
        headers:{
            "Content-Type": "application/json"
        },
        data
    }).then((Response)=>{
        console.log("response of forgate_password",Response);
    });
}


    render() {

        return (
            <View>

                <Text style={{ color: "blue", fontSize: 20 }}>Enter Your Email</Text>
                <TextInput placeholder={"Enter Your Email"} style={{
                    borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10
                }}
                    onChangeText={(Email) => this.setState({ Email })}
                    value={this.state.Email}
                     />

                <View style={{
                    borderRadius: 30, alignItems: 'center',
                    justifyContent: 'center', padding: 2, margin: 10
                }}>
                    <Button title="Forgate Password" onPress={this.forgatepassword}></Button>
                </View>

            </View>

        );
    }
    // navigate_homepage=()=>{
    //     this.props.navigation.navigate("home_page");

}
