import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>

		<View style={styles.filler} ></View>

                <TouchableHighlight
                    onPress={(e) => {this.props.goTo('Register')}}
                    style={styles.button}>
                    <Text>Create Account</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={(e) => {this.props.goTo('Login')}}
                    style={styles.button}>
                    <Text>Login</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = {
    filler: {
	    marginTop: '5%',
    }
}

