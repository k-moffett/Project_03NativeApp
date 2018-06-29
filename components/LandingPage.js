import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>

		<Image 
		    source={require('../images/SurrounDM.png')}
		    style={styles.logo}
		/>

		<TouchableHighlight
                    onPress={(e) => {this.props.goTo('Register')}}
                    style={styles.button}>
                    <Text style={styles.btntext}>Create Account</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={(e) => {this.props.goTo('Login')}}
                    style={styles.button}>
                    <Text style={styles.btntext} >Login</Text>
                </TouchableHighlight>

		<Text style={styles.textinput} >Forgot Password?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#29377E',
        alignItems: 'center',
        justifyContent: 'center',
	height: '100%',
    },
    logo: {
        width: 250,
        height: 40,
        marginBottom: 40

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
        height: 40,
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
