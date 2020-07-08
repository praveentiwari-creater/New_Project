import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Button,Date } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TextItem from './SubFile_(API.JS)';
export default class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      response_data: []
    }
  }
  componentDidMount() {
    fetch('http://api.plos.org/search?q=title:DNA')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          response_data: responseJson.response.docs[0],
        },
        );
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("score value", this.state.response_data.id);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
      
    }
    return (
      <View style={{ flex: 1, paddingTop: 20, flexDirection: 'column' }}>
        <View style={{ width: 300, height: 200, backgroundColor: 'powderblue' }} >
          <FlatList
            data={this.state.response_data.author_display}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={({ id }, index) => id}
          />
        </View>
      
        <View style={{ width: 300, height: 80, }} >
          <TextInput style={{ borderColor: "red", height: 60, borderWidth: 5, backgroundColor: 'grey' }}
            onChangeText={(response_data) => this.setState({ response_data })}
            value={this.state.response_data.publication_date} />
        </View>
        <View style={{ width: 300, height: 80, }} >
          <TextInput style={{ borderColor: "red", height: 60, borderWidth: 5, backgroundColor: 'lightgreen' }}
            onChangeText={(response_data) => this.setState({ response_data })}
            value={this.state.response_data.id} />
        </View>
        <View>
          <View style={{ width: 80, height: 40, marginTop: 80, alignItems: 'center', backgroundColor: 'lightgreen' }} >
            <Button title="submit" style={{ width: 2 }} onPress={this.USER}/>
          </View>
        </View>
      </View>
    );
  }
  USER = () => {
    this.props.navigation.navigate("TextInput",{ID:this.state.response_data.id});
  };
}

