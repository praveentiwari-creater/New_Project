import React from 'react';
import { Text, View, Image, StyleSheet, Button, FlatList } from 'react-native';

export default class navig extends React.Component {
  
    render() {

        return (
            <View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                </View>
                <Image style={{ width: 220, height: 230 }} source={require('./photo.jpg')} />
                <FlatList
                    data={[
{key:1},
{key:2},
{key:3},
{key:4},
{key:5},
                    ]
                    }
                renderItem={({item})=> <Text style={{fontSize:30}}>{item.key}</Text>}
                    />

            </View>

                );
        
            }
        }
        <Drawer.Navigator initialRouteName="Home">