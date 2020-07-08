import React, { Component } from 'react';
import {
    View, Text, Button, TextInput, StyleSheet,
    TouchableOpacity, AppRegistry,
    Alert, AsyncStorage, Image,
} from 'react-native';

import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            user_name: '',
            password: '',
            email: '',
            mobile_number: '',

            mailValidate: false,

        };
    }
    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //let reg = /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/;
        if (reg.test(text) === true) {
            this.setState({ email: text, mailValidate: true })
            return false;
        }
        else {
            this.setState({ email: text, mailValidate: false })
            return true
        }
    }
    USER = () => {
        this.props.navigation.navigate("Login_Page");
    }
    cheackName() {
        if (this.state.name == '') {
            alert('Name empty');
        }
        else if (this.state.email == '') {
            alert(' email empty ');
        }
        else if (this.state.user_name == '') {
            alert(' User_Name empty');
        }
        else if (this.state.mobile_number == '') {
            alert(' mobile_number empty ');
        }
        else if (this.state.password == '') {
            alert(' password empty ');
        }
        else {
            alert('Success')
        }
    }
    // fun=()=>{
    //     if(cheackName){
    //         return email
    //     }
    //     else{
    //         return text
    //     }
    // }

    // axios.post("https://tecorbfirst.herokuapp.com/api/signup",
    //      {
    //       name: 'this.name',
    //       email: 'this.email',
    //       username:'this.user_name',
    //       mobile:'this.mobile_number',
    //       password:'this.password'
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    // }
    ///
    //componentDidMount(){
    // this.cheackName=this.cheackName.bind(this);
    // let Formdata = new FormData();
    // Formdata.append("name","praveen");
    // Formdata.append("email","hjgfhj@hgh");
    // Formdata.append("username","pk");
    // Formdata.append("mobile","9999999909");
    // Formdata.append("password","12345");
    fun = () => {
        let data = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.user_name,
            mobile: this.state.mobile_number,
            password: this.state.password,
        }
        console.log('api data', data)
        axios({
            method: 'POST',
            url: "https://tecorbfirst.herokuapp.com/api/signup",
            headers: {
                "Content-Type": "application/json"
            },
            data
        }).then((response) => {
            console.log("signup response",response)
            if(response.data.code==200)
            {
                this.props.navigation.navigate("Login_Page");
            }
            
        }).catch((error) => {
            console.log("!!!!!!!!!!!!!ERROR!!!!!!!!!!!\n")
            console.log(error);
        });
        
    }
    

    render() {
        return (
<ScrollView>
            <View style={{ flex: 1, margin: 1, padding:1 }}>

                <View style={{ flex: 8 }}>
                    
                        <Text style={{ fontSize: 15, color: "red" }}> Name</Text>
                        <TextInput onChangeText={(e) => this.cheackName}
                            maxLength={20} placeholder="Name"
                            onChangeText={name => this.setState({ name })}
                            // onChangeText={(name) => this.name = name}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} />
                   

                   
                        <Text style={{ fontSize: 15, color: "red" }}> Email</Text>
                        <TextInput placeholder="Email" onChangeText={email => this.setState({ email })}
                            // value={this.state.email} 
                            style={[styles.mailStyle, !this.state.mailValidate ? styles.mailView : null]} />
                   
                    
                        <Text style={{ fontSize: 15, color: "red" }}> User_Name</Text>
                        <TextInput onChangeText={(e) => this.cheackName}
                            maxLength={10} placeholder="User_Name"
                            onChangeText={user_name => this.setState({ user_name })}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} />
                   
                    
                        <Text style={{ fontSize: 15, color: "red" }}> Mobile_Number</Text>
                        <TextInput onBlur={() => this.onBlur()} maxLength={10}
                            keyboardType={'numeric'} placeholder="Mobile_Number"
                            onChangeText={mobile_number => this.setState({ mobile_number })}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} />
                    
                    
                        <Text style={{ fontSize: 15, color: "red" }}> Password</Text>
                        <TextInput placeholder="Password" secureTextEntry
                            onChangeText={password => this.setState({ password })}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} />
                    
                </View>
                <View style={{ flex: 2 }}>
                    
                        <TouchableOpacity onPress={this.USER}><Text style={{ fontSize: 20, color: "green" }}>
                            I have already account..(Login Page) </Text></TouchableOpacity>
                    
                    <View style={{alignContent:'center',justifyContent:'center',height:10,width:70,margin:40}}>
                        <Button title="Submit" onPress={this.fun} />
                    </View>
                </View>

            </View>
            </ScrollView>
        );
    }
    onBlur() {
        this.setState({
            backgroundColor: 'green'
        })
    }
}
const styles = StyleSheet.create({
    butt: {
        alignItems: "center",
        margin: 10,
        height: 10,
        width: 70,
    },
    mailView: {
        borderColor: 'red',
        borderWidth: 2
    },
    mailStyle: {
        borderWidth: 2,
        margin: 10,
        width: 200
    }
});