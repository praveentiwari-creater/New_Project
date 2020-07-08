import React, { Component } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch, Option, Button } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Country_Picker extends Component {
  constructor() {
    super();
    this.state = {
      cca2: 'IN',
      countryCode: '',
      country:[],
      withCountryNameButton: false,
      withFlag: true,
      withFilter: true,
      withAlphaFilter: true,
      withCallingCode: true
    }
  }
  render() {
    const { countryCode, country, withCountryNameButton,
       withFlag, withFilter, withAlphaFilter, withCallingCode } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Country Picker !</Text>

        <CountryPicker
          onChange={(value) => this.setState({ countryCode: countryCode, cca2: value.cca2 })}
          // cca2={this.state.cca2}
          onSelect={(value1) => this.setState({ country: value1 })}
          {...{
            countryCode,
            withFilter,
            withFlag,
            withCountryNameButton,
            withAlphaFilter,
            withCallingCode,

          }}
          visible
        />
        <View>
          <Text style={{ color: 'blue', alignItems: "center", fontSize: 30 }}>
             countryCode: {this.state.country.cca2}</Text>
          <Text style={{ color: 'blue', alignItems: "center", fontSize: 30 }}>
             currency: {this.state.country.currency}</Text>
          <Text style={{ color: 'blue', alignItems: "center", fontSize: 30 }}>
             callingCode: {this.state.country.callingCode}</Text>
          <Text style={{ color: 'blue', alignItems: "center", fontSize: 30 }}>
             region: {this.state.country.region}</Text>
          <Text style={{ color: 'blue', alignItems: "center", fontSize: 30 }}> 
          subregion: {this.state.country.subregion}</Text>
          <Text style={{ color: 'blue', alignItems: "center", fontSize: 30 }}>
             flag: {this.state.country.flag}</Text>
          <Text style={{ color: 'blue', alignItems: "center", fontSize: 30 }}>
             name: {this.state.country.name}</Text>
        </View>

      </View>
    )
  }
} const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 17,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    fontSize: 10,
    textAlign: 'center',
    color: '#888',
    marginBottom: 0,
  },
  data: {
    maxWidth: 250,
    padding: 10,
    marginTop: 7,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777',
  },
})
