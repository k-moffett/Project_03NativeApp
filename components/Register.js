import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            usernameValdate: true,
            emailValdate: true,
            passwordValdate: true,
            passwordNoteShow: false
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


    validate(input, type) {
        alph = /^[a-zA-Z0-9]+$/
        alph1 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        // alph2 = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        alph2 = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        if (type === 'username') {

            this.setState({
                username: input
            })
            if (alph.test(input)) {
                this.setState({
                    username: input,
                    usernameValdate: true
                })
            } else {
                this.setState({
                    usernameValdate: false
                })
            }
        }
        else if (type === 'email') {

            this.setState({
                email: input
            })
            if (alph1.test(input)) {
                this.setState({
                    email: input,
                    emailValdate: true
                })
            } else {
                this.setState({
                    emailValdate: false
                })
            }
        }
        else if (type === 'password') {

            this.setState({
                password: input,
                passwordNoteShow: true
            })
            if (alph2.test(input)) {
                this.setState({
                    password: input,
                    passwordValdate: true,
                    passwordNoteShow: false
                })

            } else {
                this.setState({
                    passwordValdate: false
                })
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={require('../images/SurrounDM.png')}
                    style={styles.logo}
                />

                <Text style={styles.header}>Registeration</Text>

                <TextInput
                    placeholder="username"
                    placeholderTextColor="#f5f6fa"
                    style={[styles.textinput, !this.state.usernameValdate ? styles.error : null]}
                    underlineColorAndroid={'transparent'}
                    // onChangeText={(username) => this.setState({ username })}
                    onChangeText={(username) => this.validate(username, 'username')}
                    value={this.state.username}
                />

                <TextInput
                    placeholder="email"
                    placeholderTextColor="#f5f6fa"
                    style={[styles.textinput, !this.state.emailValdate ? styles.error : null]}
                    underlineColorAndroid={'transparent'}
                    // onChangeText={(email) => this.setState({ email })}
                    onChangeText={(email) => this.validate(email, 'email')}
                    value={this.state.email}
                />

                <TextInput
                    placeholder="password"
                    placeholderTextColor="#f5f6fa"
                    style={[styles.textinput, !this.state.passwordValdate ? styles.error : null]}
                    underlineColorAndroid={'transparent'}
                    // onChangeText={(password) => this.setState({ password })}
                    onChangeText={(password) => { this.validate(password, 'password') }}
                    value={this.state.password}
                    secureTextEntry={true}
                    onFocus={() => this.validate('password')}
                />

                {!this.state.emailValdate && <FlatList
                    data={[
                        { key: 'email format is incorrect or email is empty' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.notetext}>{item.key}</Text>}
                />}

                {/* {this.state.passwordNoteShow && <Text style={styles.notetext}>{"\n"}password can not be empty and should be minimum 6 characters {"\n"}*Should be has special character {"\n"}Should be has Small letter and Capital Letter </Text>} */}
                {this.state.passwordNoteShow && <FlatList
                    data={[
                        { key: 'Password can not be empty' },
                        { key: 'Password should be min 6 characters' },
                        { key: 'Password should includes minimum one number' },
                        { key: 'Password should includes Small and Capital letters' },
                        { key: 'Password should be has minimum one special character' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.notetext}>{item.key}</Text>}
                />}

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#4A4A4A', '#EFEFEF']} style={styles.mainButton}>
                    <TouchableHighlight
                        onPress={(e) => { this.submit() }}
                        style={styles.button}>
                        <Text style={styles.btntext}>Create Account</Text>
                    </TouchableHighlight>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#4A4A4A', '#EFEFEF']} style={styles.mainButton}>
                    <TouchableHighlight
                        onPress={(e) => { this.props.goTo('Landing') }}
                        style={styles.button}>
                        <Text style={styles.btntext}>Back</Text>
                    </TouchableHighlight>
                </LinearGradient>
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
        // borderBottomColor: '#199187',
        // borderBottomWidth: 1
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
    mainButton: {
        margin: 10,
        borderRadius: 5,
        height: 40,
        width: 200
    },
    button: {
        // alignSelf: 'stretch',
        // alignSelf: 'center',
        // width: 200,
        // height: 5,
        // padding: 10,
        // backgroundColor: '#59cbbd',
        // marginTop: 30,
        // borderRadius: 5

        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 25,
        marginLeft: 25,
        padding: 10,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    },
    error: {
        borderBottomWidth: 1,
        // borderColor: '#c0392b',
        borderBottomColor: '#c0392b',
    },
    notetext: {
        color: '#fff',
    }

});


