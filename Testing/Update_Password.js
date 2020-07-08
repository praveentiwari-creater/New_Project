import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Update_Password extends Component {
    constructor() {
        super();
        this.state = {
            oldpassword: '',
            newpassword: '',
            confirmpassword:'',
            tokenvalue: ''
        }
    }
    updatepassword = async () => {
        {
            (this.state.newpassword != this.state.confirmpassword) ? Alert.alert("password is not matching") : 
        
        this.setState({ tokenvalue: await AsyncStorage.getItem('token') });
        console.log("token value updatepassword",this.state.tokenvalue);
        let data = {
            
            password: this.state.oldpassword,
            newpassword: this.state.newpassword
        }
        axios({
            method: 'POST',
            url: "https://tecorbfirst.herokuapp.com/api/updatepassword",
            headers: {
                "Content-Type": "application/json",
                "tokenId":this.state.tokenvalue,
            },
            data
        }).then((response) => {
            console.log("update password response",response)
            if(response.data.code==200)
            {
                Alert.alert(" password update successfull");
            }

        }).catch((error) => {
            console.log("!!!!!!!!!!!!!ERROR!!!!!!!!!!!\n")
            console.log(error);
        });
    }
    }
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                <View style={{ flex: 9 }}>
                    <View style={{
                        borderRadius: 50,
                        padding: 3, margin: 20
                    }}>
                        <Text style={{ color: "blue", fontSize: 20 }}>Old Password</Text>
                        <TextInput placeholder={"old Password"} style={{
                            borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10
                        }}
                            onChangeText={(oldpassword) => this.setState({ oldpassword })}
                            value={this.state.oldpassword} />
                    </View>

                    <View style={{ padding: 1, margin: 20 }}>
                        <Text style={{ color: "blue", fontSize: 20 }}>New Password</Text>
                        <TextInput placeholder={"new password"} style={{ borderColor: 'blue',
                         borderWidth: 2, margin: 10 }}
                            onChangeText={(newpassword) => this.setState({ newpassword })}
                            value={this.state.newpassword} />
                    </View>
                    <View style={{ padding: 1, margin: 20 }}>
                        <Text style={{ color: "blue", fontSize: 20 }}>Confirm Password</Text>
                        <TextInput placeholder={"confirm password"} style={{ borderColor: 'blue',
                         borderWidth: 2, margin: 10 }}
                            onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
                            value={this.state.confirmpassword} />
                    </View>
                    <View style={{
                        borderRadius: 30, alignItems: 'center',
                        justifyContent: 'center', padding: 2, margin: 10
                    }}>
                        <Button title="Update Password" onPress={this.updatepassword}></Button>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={ this.navigate_homepage} >
                        <Text style={{fontSize:20,color:'blue'}}> Back </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    navigate_homepage=()=>{
        this.props.navigation.navigate("home_page");
    }
}
