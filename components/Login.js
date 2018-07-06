import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, AsyncStorage } from 'react-native'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
	this.state = {
	    email: '',
	    password: '',
	}
    }

    submit() {
        fetch('http://app.surroundm.com/login', {
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
            if (responseJson.passCheck === 'correct') {
	        this.storeItem(`${responseJson.sessid}`)
		this.props.goTo('HomePage')
	        } else {
		    console.log(responseJson.passCheck)
		}
            })
        .catch((error) => {
            console.error(error);
            });    
    }

    async storeItem(item) {
	    console.log(item, 'storeItem')
        try {
            let jsonOfItem = await AsyncStorage.setItem('sessid',item);
            console.log('Stored in Async')
        } catch (error) {
          console.log(error.message);
        }
    }

    render() {
        return (
            <View style={styles.container}>

	        <Image 
		    source={require('../images/SurrounDM.png')}
		    style={styles.logo}
		/>

		<Text style={styles.header}>Login</Text>

		<TextInput
                    placeholder="email"
                    style={styles.textinput}
		    underlineColorAndroid={'transparent'}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="password"
                    style={styles.textinput}
		    underlineColorAndroid={'transparent'}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                /> 

                <TouchableHighlight 
		    onPress={(e) => {this.submit()}}
		    style={styles.button}>
                    <Text syle={styles.btntext}>Login</Text>
                </TouchableHighlight>
               
		<TouchableHighlight 
		    onPress={(e) => {this.props.goTo('Landing')}}
		    style={styles.button}>
                    <Text syle={styles.btntext}>Back</Text> 
		</TouchableHighlight>
           
	    </View>
        );
    }
}

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
