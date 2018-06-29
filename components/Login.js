import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
	this.state = {
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
                    <Text>Login</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
