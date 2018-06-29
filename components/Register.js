import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native'

export default class Register extends React.Component {
    constructor(props) {
        super(props)
	this.state = {
	    username: '',
	    email: '',
	    password: '',
	}
    }

    submit() {
        fetch('http://ec2-54-89-68-6.compute-1.amazonaws.com/signUp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
	})
	.then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            })
        .catch((error) => {
            console.error(error);
            });    
    }


    render() {
        return (
            <View>

	        <TextInput
                    placeholder="username"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    placeholder="email"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="password"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                /> 

                <TouchableHighlight onPress={(e) => {this.submit()}}>
                    <Text>Create Account</Text>
                </TouchableHighlight>

            </View>
        );
    }
}


