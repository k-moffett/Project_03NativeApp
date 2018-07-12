import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Image } from 'react-native'

export default class MainView extends React.Component {

    constructor(props) {
        super(props)
    }

    checkSessid() {
        console.log('SESSID: ', this.props.sessid)
    }

    logout() {
        this.props.goTo('LandingPage')
    }

    createChat() {
        console.log('create chat')
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Main View</Text> */}

                <Image
                    source={require('./../../images/SurrounDM.png')}
                    style={styles.logo}
                />


                <TouchableHighlight
                    style={styles.button}
                    onPress={(e) => { this.checkSessid() }}
                >
                    <Text style={styles.btntext}>Sessid</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button}
                    onPress={(e) => { this.logout() }}
                >
                    <Text style={styles.btntext}>Log Out</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button}
                    onPress={(e) => { this.createChat() }}
                >
                    <Text style={styles.btntext}>Create Chat</Text>
                </TouchableHighlight>

                {/* <ScrollView>
                    {[...Array(100)].map((item, index) => {
                        return(
                            <View>
                                <Text>{index}</Text>
                            </View>
                        )
                    })}
                </ScrollView> */}
            </View>
        )
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
        width: 200,
        height: 30,
        marginBottom: 20

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
        margin: 10,
        marginRight: 25,
        marginLeft: 25,
        padding: 10,

        backgroundColor: '#426bd7',
        borderRadius: 5,
        width: 100,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold'
    }
})