import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image } from 'react-native';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        <TouchableHighlight
          onPress={(e) => { this.props.goTo('Landing') }}
          style={styles.button}>
          <Text syle={styles.btntext}>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default GeolocationExample;


const styles = StyleSheet.create({

  container: {
    height: '100%',
    backgroundColor: '#29377E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 40,
    marginBottom: 40

  },
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1
  },
  textinput: {
    alignSelf: 'stretch',
    alignSelf: 'center',
    height: 40,
    width: '60%',
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
    borderRadius: 5
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  }
});