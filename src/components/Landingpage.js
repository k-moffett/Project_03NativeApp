import React from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';


import LogoImg from '../images/SurrounDM.png';


class Landingpage extends React.Component {

    render() {

        return (
            <View style={styles.container}>

                <View >
                    <Image style={styles.logo}
                        source={LogoImg} />
                </View>

                <Text style={styles.header}>SurrounDM </Text>

                <TouchableHighlight
                    onPress={this.viewTwo}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    onPress={this.viewThree}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <Text style={styles.textinput}>Forgot Password?</Text>


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




export default Landingpage;