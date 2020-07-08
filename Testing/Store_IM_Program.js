import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
class home_page extends Component {
////
 

////
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      User_Name: '',
      avatarSource:''

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


        console.disableYellowBox = true;

      });
  }
  doc = async () => {
    let token2 = await AsyncStorage.getItem('token');
    console.log("token new", token2);

    const formData = new FormData();
    formData.append("name", "pchghg");
    formData.append("image", {
      uri: this.state.avatarSource.uri,
      // minType :'image/jpeg',
      type: this.state.avatarSource.type,
      // type:'image/jpg',
      name: this.state.avatarSource.fileName,
    });

    let data = {
      name: this.state.Name,
      email: this.state.Email,
      username: this.state.User_Name,
      image: formData,
    }
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
        console.log("post api tecorb", response);
        this.setState({ Name: response.data.config.data.name })
        this.setState({ Email: response.data.config.data.email })
        this.setState({ User_Name: response.data.config.data.username })
        //
        this.setState({ avatarSource: response.data.config.data.image })
        //
        // console.log("post api tecorb", response);
      });
  }
  ///////////
  fun = () => {
    ImagePicker.showImagePicker((response) => {
      console.log('Response = ', response);
      this.setState({
        avatarSource: response,
      });
      console.log("state", this.state.avatarSource);

    });
  }
  ///////////
  render() {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, borderColor: "red", padding: 30, margin: 2 }}>
                <ScrollView>

          <View style={{ flex: 2 }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}
              style={{ alignItems: 'flex-start', margin: 16, padding: 1 }}>
              <Image source={require('./Icons/menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ color: "blue", fontSize: 20 }}>{'Name'}</Text>
            <TextInput editable={true} placeholder={"Name"} style={{ borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10 }}
              onChangeText={Name => this.setState({ Name })}
              value={this.state.Name} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ color: "blue", fontSize: 20 }}> Email</Text>
            <TextInput editable={true} placeholder={"Email"} style={{ borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10 }}
              onChangeText={Email => this.setState({ Email: Email })}
              value={this.state.Email} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ color: "blue", fontSize: 20 }}> User_Name</Text>
            <TextInput editable={true} placeholder={"User_Name"} style={{ borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10 }}
              onChangeText={User_Name => this.setState({ User_Name: User_Name })}
              value={this.state.User_Name} />
          </View>
          {/* , (Name => this.setState({ Name })) ,(Email => this.setState({ Email })) , (Mobile => this.setState({ Mobile })) */}

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button title='Update' onPress={this.doc} />
          </View>
          <View style={{ flex: 2 }}>

            <View style={{ height: 70, width: 70,borderColor:'black',borderWidth:2,borderRadius:30 }}>
              <Image source={{uri:this.state.avatarSource}} style={{ width: 70, height: 50 }} />
            </View>
            <View style={{ width: 100, height: 70 }}>
              <Button title="select image" onPress={this.fun} />
            </View>
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





















