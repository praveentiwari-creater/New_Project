import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
export default class turnpage extends React.Component {
    render() {
        return (
            <View>
              <Text style={{ fontSize: 60 }}>
                    test
              </Text>
            </View>
        );
    }
}










import React from 'react';
import { Text, View, Button } from 'react-native';
export default class home extends React.Component {
    siter = () => {
        this.props.navigation.push("teacher");
    };
 render() {
        return (
            <View>
                <View>
                    <Text style={{ fontSize: 18 }}>home page is</Text>
                </View>
                <View>
                    <Button title="go" onPress={this.siter} />
                </View>
            </View>
        );

    }
}
