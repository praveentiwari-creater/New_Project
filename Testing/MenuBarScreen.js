import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
class MenuBarScreen extends React.Component {
    static navigationOptions = {
        title: 'MenuScreen',
      };
    render() {
        return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}
                        style={{ alignItems: 'flex-start', margin: 16 }}
                       >
                        <Image source={require('./Icons/menu.png')} />
                    </TouchableOpacity>

                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textStyle}>This is main Screen </Text>
                    </View>
                </View>
            );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    textStyle: {
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center'
    }

});

export default MenuBarScreen;