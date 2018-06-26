import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Test from './components/test'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: ''
    }
  }
  
  submitUserInfo() {
    console.log('handleSubmitUserInfoYOO')
    // http working. 
    // https not working. maybe something with the ec2 security group settings?
    fetch('http://ec2-54-152-128-213.compute-1.amazonaws.com/signUp', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        displayName: this.state.displayName,
        email: this.state.email,
        password: this.state.password
      })
    })
  }
  
  render() {

    return (
      <View style={styles.container}>
      <Text>Display Name:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(displayName) => this.setState({displayName})}
          value={this.state.displayName}
        />
      <Text>Email</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
      <Text>Password:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button style={styles.button}
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
