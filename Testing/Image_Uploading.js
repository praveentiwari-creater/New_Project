import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
class Image_Uploading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: []
    }
  }
  fun = () => {
    ImagePicker.showImagePicker((response) => {
      console.log('Response = ', response);
      this.setState({
        avatarSource: response,
      });
      console.log("state", this.state.avatarSource);
    });
  }
  upload = () => {
    const formData = new FormData();
    formData.append("name", "pchghg");
    formData.append("image", {
      uri: this.state.avatarSource.uri,
      // minType :'image/jpeg',
      type: this.state.avatarSource.type,
      // type:'image/jpg',
      name: this.state.avatarSource.fileName,
         });
           console.log("value of form_data",formData);
    axios({
      url: 'https://tecorbservesh.herokuapp.com/api/imageupload',
      method: 'POST',
      data : formData,
      //: formData,
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'multipart/form-data',
      // },
    }).then((response) => {
      console.log("api_response", response)
    })
  }
render() {
    return (
      <View>
        <View>
          <Image source={this.state.avatarSource} style={{ width: 300, height: 300 }} />
        </View>
        <View style={{ padding: 50, justifyContent: "center" }}>
          <Button title="select image" onPress={this.fun} />
        </View>
        <View style={{ padding: 50, justifyContent: "center" }}>
          <Button title="upload image" onPress={this.upload} />
        </View>
        <TouchableOpacity onPress={this.back} ><Text style={{ fontSize: 20, color: "green", }}>
          go Back </Text></TouchableOpacity>
      </View>
    );
  }
  back = () => {
    this.props.navigation.navigate("home_page")
  }
}
export default Image_Uploading;



