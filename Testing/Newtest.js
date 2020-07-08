import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

export default class Newtest extends React.Component {
pick=()=>{
    this.props.navigation.navigate('photo');
}
    render() {
        const {Id}  = this.props.route.params;


        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
        <Text>Id: {JSON.stringify(Id)}</Text>
<Button title="photo" onPress={this.pick}/>
            </View>

        );

    }
}
