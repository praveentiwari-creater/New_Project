import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
class home_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      User_Name: '',
      avatarSource: '',
      imageResp: ''
    }
  }
  async componentDidMount() {
    let token1 = await AsyncStorage.getItem('token')
    axios({
      method: 'GET',
      url: "https://tecorbfirst.herokuapp.com/api/getuserdetail",
      headers: {
        "Content-Type": "application/json",
        "tokenId": token1,
      },
    })
      .then((response) => {
        console.log("response ", response);
        this.setState({ Name: response.data.Userdetail.name })
        this.setState({ Email: response.data.Userdetail.email })
        this.setState({ User_Name: response.data.Userdetail.username })
        //
        this.setState({ avatarSource: response.data.Userdetail.image });
        console.log('image', this.state.avatarSource)
        //
        console.log("get api tecorb", response.data.Userdetail.name);
        console.log("get api tecorb", response.data.Userdetail.email);
        console.log("get api tecorb", response.data.Userdetail.username);
        console.log("get api tecorb", response);


      });
  }



  doc = async () => {
    let token2 = await AsyncStorage.getItem('token');
    console.log("token new", token2);

    const formData = new FormData();
    formData.append("name", this.state.Name);
    formData.append("email", this.state.Email);
    formData.append("username", this.state.User_Name);

    formData.append("image", {
      name: this.state.imageResp.fileName,
      type: this.state.imageResp.type,
      uri: this.state.imageResp.uri,
      // type:'image/jpg',
      mineType: 'image/jpeg'
    });

    console.log("form data valuesssss", formData);
    console.log("form data type", this.state.imageResp.type);
    console.log("form data filename", this.state.imageResp.fileName);
    console.log("form data uri", this.state.imageResp.uri);
    let data = formData;
    console.log('data values', data);

    axios({
      method: 'POST',
      url: "https://tecorbfirst.herokuapp.com/api/updateuser",
      headers: {
        "Content-Type": "application/json",
        "tokenId": token2,
      },
      data
    })
      .then((response) => {
        console.log("post api response", response);
        if (response.data.code == 200) {
          Alert.alert("Update Successfull");
        }
        // this.setState({ Name: response.data.config.data.name })
        // this.setState({ Email: response.data.config.data.email })
        // this.setState({ User_Name: response.data.config.data.username })
        // this.setState({ imageResp: response.data.config.data.image })
      });
    // console.log('testing response image', response.data.config.data.image);

  }
  ///////////
  fun = () => {
    ImagePicker.showImagePicker((response) => {
      console.log('Response = ', response);
      this.setState({
        avatarSource: response.uri,
        imageResp: response
      });
      console.log("state image", this.state.avatarSource);
    });
  }
  ///////////
  LogOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Login_Page");
    console.log("token clear");
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, borderColor: "red", margin: 3 }}>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: 'red' }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}
              style={{ alignItems: 'flex-start', margin: 16, padding: 1 }}>
              <Image source={require('./Icons/menu.png')} />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 6, backgroundColor: 'lightgreen', padding: 30 }}>
            <Text style={{ color: "blue", fontSize: 20 }}>{'Name'}</Text>
            <TextInput editable={true} placeholder={"Name"} style={{
              borderRadius: 2,
              borderColor: "blue", borderWidth: 2, margin: 10
            }}
              onChangeText={Name => this.setState({ Name })}
              value={this.state.Name} />


            <Text style={{ color: "blue", fontSize: 20 }}> Email</Text>
            <TextInput editable={true} placeholder={"Email"} style={{
              borderRadius: 2,
              borderColor: "blue", borderWidth: 2, margin: 10
            }}
              onChangeText={Email => this.setState({ Email: Email })}
              value={this.state.Email} />

            <Text style={{ color: "blue", fontSize: 20 }}> User_Name</Text>
            <TextInput editable={true} placeholder={"User_Name"} style={{
              borderRadius: 2,
              borderColor: "blue", borderWidth: 2, margin: 10
            }}
              onChangeText={User_Name => this.setState({ User_Name: User_Name })}
              value={this.state.User_Name} />
          </View>

          <View style={{ flex: 4, backgroundColor: 'lightblue', flexDirection: 'row', padding: 30, }}>
            <TouchableOpacity onPress={this.fun} style={{
              height: 70, width: 70,
              borderColor: 'black', borderWidth: 2, borderRadius: 10
            }}>
              <Image source={{ uri: this.state.avatarSource }} style={{ width: 70, height: 70, borderRadius: 10 }} />
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center", padding: 65 }}>
              <Button title='Update' onPress={this.doc} />
            </View>
            <TouchableOpacity
              onPress={this.LogOut}
              style={{ justifyContent: "center", alignItems: "center", padding: 20 }}>
              <Text style={{ fontSize: 20, color: "blue" }}> LogOut </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}
export default home_page;
const styles = StyleSheet.create({
  stl: {
    margin: 40,
    height: 10,
    width: 70,

    alignItems: "center"
  },
});
