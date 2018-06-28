import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import LogoImg from '../images/SurrounDM.png';


class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
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

                <Text style={styles.header}>Registeration </Text>

                <TextInput
                    placeholder="Display Name"
                    style={styles.textinput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    placeholder="email"
                    style={styles.textinput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    placeholder="password"
                    style={styles.textinput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <TouchableOpacity style={styles.button}  >
                    <Text style={styles.btntext}>Sign up</Text>
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

export default Register;




