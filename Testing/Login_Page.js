import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    fun = () => {
        let data = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log('api data', data);
        axios({
            method: 'POST',
            url: "https://tecorbfirst.herokuapp.com/api/login",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
            .then(async (response) => {

                console.log("user token checking", response.data.Userdetail._id);
                console.log(response)
                if (response.data.code == 200) {
                    await AsyncStorage.setItem('token', response.data.Userdetail.Token);
                    this.props.navigation.navigate("Home_Drawer");
                }
            })
            .catch((error) => {
                alert("Login Failed")
                console.log(error);
            });
        ////

        /////c
    };
    USER = () => {
        this.props.navigation.navigate("SignUp");
    }
fogate=()=>{
    this.props.navigation.navigate("Forgate_Password")
}

    render() {
        return (
            <View style={{ flex: 1, margin: 2, padding:1, backgroundColor: "lightpink" }}>
                <View style={{flex:8}}>
                    <Text style={{ color: "blue", fontSize: 20 }}>User Name</Text>
                    <TextInput placeholder="User_Name" maxLength={25} 
                    style={{ borderWidth: 2, margin:10,width:200 }}
                        onChangeText={username => this.setState({ username })} />

                    <Text style={{ color: "blue", fontSize: 20 }}>Password</Text>
                    <TextInput placeholder="Password" maxLength={10} secureTextEntry
                     style={{  borderWidth: 2, margin:10,width:200  }}
                        onChangeText={password => this.setState({ password })} />

<TouchableOpacity onPress={this.fogate}>
                  <Text style={{fontSize: 15, color: "red"}}>  Forgate Password </Text>
                </TouchableOpacity>
                    
                
                </View>
                
                <View style={{flex:2}}>
                <TouchableOpacity onPress={this.USER} ><Text style={{ fontSize: 20, color: "green",margin:2}}>
                        I don't have an account </Text></TouchableOpacity>

                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Button title="Submit" onPress={this.fun}/>
                </View>
                </View>
               
            </View>
        );
    }
}
const styles = StyleSheet.create({
    butt: {
        margin: 50,
        height: 10,
        width: 70,
    },
});