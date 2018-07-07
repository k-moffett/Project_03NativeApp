import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#4A4A4A', '#EFEFEF']} style={styles.mainButton}>
                    <TouchableHighlight
                        onPress={(e) => { this.props.goTo('Register') }}
                        style={styles.button}>
                        <Text style={styles.btntext}>Create Account</Text>
                    </TouchableHighlight>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#4A4A4A', '#EFEFEF']} style={styles.mainButton}>
                    <TouchableHighlight
                        onPress={(e) => { this.props.goTo('Login') }}
                        style={styles.button}>
                        <Text style={styles.btntext} >Login</Text>
                    </TouchableHighlight>
                </LinearGradient>
                {/* <Text style={styles.textinput} >Forgot Password?</Text> */}

                <TouchableOpacity activeOpacity={0.6} >
                    <Text style={styles.forgetPassword}>Forget Password</Text>
                </TouchableOpacity>
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
    forgetPassword: {
        // alignSelf: 'stretch',
        // height: 40,
        // marginBottom: 30,
        // color: '#fff',
        // borderBottomColor: '#f8f8f8',
        // borderBottomWidth: 1,
        textAlign: 'center',
        marginTop: 20,
        color: "#f5f6fa"
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
        fontWeight: 'bold'
    }

});
