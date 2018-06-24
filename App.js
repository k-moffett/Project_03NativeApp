import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  
  submitUserInfo() {
    console.log('handleSubmitUserInfoYOO')
    // http working. 
    // https not working. maybe something with the ec2 security group settings?
    fetch('http://ec2-54-89-68-6.compute-1.amazonaws.com/signUp', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password
      })
    })
  }
  
  render() {

    return (
      <View style={styles.container}>
      <Text>Name:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
      <Text>Password:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          onPress={(e) => {this.submitUserInfo()}}
          title="Submit user info"
          color="#841584"
          accessibilityLabel="Submit user info"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
