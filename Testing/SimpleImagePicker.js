import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
class Image_Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        }
    }
    fun = () => {
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);
            this.setState({
                avatarSource: response,
            });
        }
        )
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
            </View>
        );
    }
}
export default Image_Picker;



