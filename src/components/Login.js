import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import LogoImg from '../images/SurrounDM.png';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    submitUserInfo() {
        console.log('handleSubmitUserInfoYOO')
        // http working. 
        // https not working. maybe something with the ec2 security group settings?
        fetch('http://ec2-54-89-68-6.compute-1.amazonaws.com/login', {
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
    }

    render() {
        return (
            <View style={styles.container}>

                <View >
                    <Image style={styles.logo}
                        source={LogoImg} />
                </View>

                <Text style={styles.header}>Log In </Text>

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

                <TouchableOpacity style={styles.button}  >
                    <Text style={styles.btntext}>Log In</Text>
                </TouchableOpacity >

            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
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

export default Login;