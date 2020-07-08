// //home page
// import React, { Component } from 'react';
// import { Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';
// import ImagePicker from 'react-native-image-picker';
// import axios from 'axios';
// class home_page extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {  
//       Name: '',
//       Email: '',
//       User_Name: '',
//     }
    
//   }
//   async componentDidMount() {
//     let token1 = await AsyncStorage.getItem('token')
//     axios({
//       method: 'GET',
//       url: "https://tecorbfirst.herokuapp.com/api/getuserdetail",
//       headers: {
//         "Content-Type": "application/json",
//         "tokenId": token1,
//       },
//    })
//       .then((response) => {
//         this.setState({ Name:response.data.Userdetail.name })
//         this.setState({ Email:response.data.Userdetail.email })
//         this.setState({ User_Name:response.data.Userdetail.username })
//         console.log("get api tecorb", response.data.Userdetail.name);
//         console.log("get api tecorb", response.data.Userdetail.email );
//         console.log("get api tecorb", response.data.Userdetail.username);
//         console.log("get api tecorb", response);
//         console.disableYellowBox = true;
//       });
//   }
//   doc= async ()=> {
//     let token2 = await AsyncStorage.getItem('token');
//     console.log("token new",token2);
//       let data = {
//       name: this.state.Name,
//       email: this.state.Email,
//       username: this.state.User_Name,
//     }
//     axios({
//       method: 'POST',
//       url: "https://tecorbfirst.herokuapp.com/api/updateuser",
//       headers: {
//         "Content-Type": "application/json",
//         "tokenId":token2,
//       },
//       data
//     })
//       .then((response) => {
//         console.log("post api tecorb", response);
//         this.setState({ Name:response.data.config.data.name })
//         this.setState({ Email:response.data.config.data.email })
//         this.setState({ User_Name:response.data.config.data.mobile })
//         // console.log("post api tecorb", response);
//       });
// }
//   render() {
//    const { navigation } = this.props;
//     return (
//       <View style={{ flex: 1, borderColor: "red" }}>
//         <View>
//           <TouchableOpacity onPress={() => navigation.openDrawer()}
//             style={{ alignItems: 'flex-start', margin: 16 }}>
//             <Image source={require('./Icons/menu.png')} />
//           </TouchableOpacity>
//         </View >
//         <View style={{ padding: 10, margin: 20 }}>
//           <Text style={{ color: "blue", fontSize: 20 }}>{'Name'}</Text>
//           <TextInput editable={true} placeholder={"Name"} style={{ borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10 }}
//             onChangeText={Name => this.setState({ Name })}
//             value={this.state.Name} />

//           <Text style={{ color: "blue", fontSize: 20 }}> Email</Text>
//           <TextInput editable={true} placeholder={"Email"} style={{ borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10 }}
//             onChangeText={Email => this.setState({ Email:Email })}
//             value={this.state.Email} />

//           <Text style={{ color: "blue", fontSize: 20 }}> User_Name</Text>
//           <TextInput editable={true} placeholder={"User_Name"} style={{ borderRadius: 2, borderColor: "blue", borderWidth: 2, margin: 10 }}
//             onChangeText={User_Name => this.setState({ User_Name:User_Name })}
//             value={this.state.User_Name} />
// {/* , (Name => this.setState({ Name })) ,(Email => this.setState({ Email })) , (Mobile => this.setState({ Mobile })) */}
//         </View>
//                 <View style={{ justifyContent: "center", alignItems: "center" }}>
//           <Button title='Update' onPress={this.doc} />
//         </View>
//        </View>

//     );
//   }
// }
// export default home_page;
// const styles = StyleSheet.create({
//   stl: {
//    margin: 40,
//     height: 10,
//     width: 70,

//     alignItems: "center"
//   },
// });


/////


import React from 'react'
import { View, Text, Image, Button ,ActivityIndicator} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      console.log("image picker check responese",response);
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
    const createFormData = (photo, body) => {
      const data = new FormData();

      data.append("photo", {
        name: this.state.photo.fileName,
        type: this.state.photo.type,
        path: this.state.photo.path

          // Platform.OS === "android" ? photo.uri : photo.uri.replace("no available path")
      });
      console.log("append name",name);
      console.log("append type",type);
      console.log("append uri",uri);

      // Object.keys(body).forEach(key => {
      //   data.append(key, body[key]);
      // });

      return data;
    }
  }

  handleUploadPhoto = () => {
    axios({
      method: 'POST',
      url: "https://tecorbservesh.herokuapp.com/api/imageupload",
      data:this.data
  })
      .then((response) => {
           console.log("response of post",response)
          })
      .catch((error) => {
          alert("Login Failed")
          console.log(error);
      });
  };


  render() {
    const { photo } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (

            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300 }}
            />
            )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
        <Button title="Upload" onPress={this.handleUploadPhoto} />
      </View>
    )
  }
}









// import React,{Component} from 'react';
// import {Text,View,Button} from 'react-native';
// function dratab3({ navigation }) {
//     return (


//       <View>
//         <Text style={{fontSize:40}}>
//           Hello Tiesting
//       </Text>
//       </View>
//     );

//   }
//   export default dratab3;
























// import React, { Component } from 'react';
// import { Text, View, Button, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import axios from 'axios';
// class Image_Picker extends Component {
//   state = {
//       avatarSource: null,
//       isUploading: false
//     }
  
//   selectImage = async() => {
//     ImagePicker.showImagePicker({
//       noData:true,
//       mediaType:'photo',
//     allowsEditing:true,
//     },(response) => {
//       console.log('Response = ', response);
//     if(response.didCancel)
// {
//   Alert.alert("Error","user cancelles image picker");
// }
// else

// {
//   this.uploadImage(response.uri);
// }
// });
//   }
//   uploadImage = async (image_uri) => {
//     this.setState = ({ isUploading: true });
//       let uploadData = new FormData();
//     uploadData('submit', 'ok');
//     uploadData.append('file', { type: image / jpg, uri: image_uri, name: 'photo.jpg' });
//     axios({
//       url: 'https://tecorbservesh.herokuapp.com/api/imageupload',
//       method: 'POST',
//       body: uploadData,
//     }).then((response) => {
//       if (response.status) {
//         this.setState = ({ isUploading: false, avatarSource: response.image });
//       }
//       else {
//         this.setState = ({ isUploading: false});
//         Alert.alert('Error', response.message);
//       }
//       console.log("api_response", response)
//     }).catch(() => {
//       Alert.alert('Error', 'Eroor on network');
//     })

//   }
//   render() {
//     return (
//       <View>
//         {
//           this.state.avatarSource && <Image source={{ uri: this.state.avatarSource }} style={{ width: 80, height: 300 }} />
//         }
//         {
//           this.state.isUploading && <ActivityIndicator />
//         }
//         <View style={{ padding: 100, justifyContent: "center" }}>
//         <Button title="select image" onPress={this.selectImage} />
//         </View>
//         <TouchableOpacity onPress={this.back} ><Text style={{ fontSize: 20, color: "green", }}>
//           go Back </Text></TouchableOpacity>
//       </View>
//     );
//   }
//   back = () => {
//     this.props.navigation.navigate("home_page")
//   }
// }
// export default Image_Picker;


























