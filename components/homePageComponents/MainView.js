import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Image, TextInput } from 'react-native'

export default class MainView extends React.Component {

    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    checkSessid() {
        console.log('SESSID: ', this.props.sessid)
    }

    logout() {
        this.props.goTo('LandingPage')
    }

    enterChat() {
        this.props.goTo('ChatRoom')
    }

    addChat() {
        console.log('create chat in firebase named: ', this.state.text)
        console.log('query firebase to update all chats in the scoll view')
    }

    logout() {
        this.props.goTo('LandingPage')
    }

    addChat() {
        console.log('create chat in firebase named: ', this.state.text)
        console.log('query firebase to update all chats in the scoll view')
    }

    checkSessid() {
        console.log('SESSID: ', this.props.sessid)
    }

    enterChat() {
        this.props.goTo('ChatRoom')
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Image
                        style={styles.flexitemLogo}
                        source={require('./../../images/SurrounDM.png')}
                    />

                    <TouchableHighlight
                        style={styles.flexitem1}
                        onPress={(e) => { this.logout() }}
                    >
                        <Text style={styles.btntext}>Log Out</Text>
                    </TouchableHighlight>

                    <TextInput
                        style={styles.flexitem2}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder='Enter Chat Name Here'
                        placeholderTextColor='#636e72'
                        underlineColorAndroid={'transparent'}

                    />

                    <TouchableHighlight
                        style={styles.flexitem3}
                        onPress={(e) => { this.addChat() }}
                    >
                        <Text style={styles.btntext}>Add Chat</Text>
                    </TouchableHighlight>

                    <Text style={styles.chatText}>Chatrooms around me within: 1 mile</Text>
                </View>

                <View style={styles.container2}>
                    <ScrollView>
                        {/* {[...Array(100)].map((item, index) => {
                        return(
                            <View>
                                <Text>{index}</Text>
                            </View>
                        )
                    })} */}
                        <TouchableHighlight
                            style={styles.flexitem4}
                            onPress={(e) => { console.log('button click motherfucker.') }}
                        >
                            <Text>This is what a chatroom button will look like</Text>
                        </TouchableHighlight>

                    </ScrollView>
                </View>

                {/*Test*/}
                <TouchableHighlight
                    style={styles.flexitem5}
                    onPress={(e) => { this.checkSessid() }}
                >
                    <Text>Sessid</Text>
                </TouchableHighlight>

                {/*Test*/}
                <TouchableHighlight
                    style={styles.flexitem6}
                    onPress={(e) => { this.enterChat() }}
                >
                    <Text>Enter Chat</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29377E',
        height: '100%',
    },


    container1: {
        backgroundColor: '#29377E',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
        // height: '100%',
    },
    flexitemLogo: {
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 200,
        height: 30,
        marginTop: 50,
        marginBottom: 20,
        // marginLeft: 90,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    flexitem1: {
        // backgroundColor: '#426bd7',
        alignItems: 'center',
        marginRight: 11,
        height: 30,
        width: 70,
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 50,
    },


    flexitem2: {
        backgroundColor: '#dfe6e9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        width: 320,
        padding: 15,
        fontSize: 17
    },
    flexitem3: {
        backgroundColor: '#426bd7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        width: 70,
    },


    container2: {
        backgroundColor: '#29377E',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        // height: '100%',
    },
    flexitem4: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        height: 50,
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#636e72',
    },

    flexitem5: {
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 2,

    },
    flexitem6: {
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 2
    },


    btntext: {
        color: '#fff'
    },
    chatText: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginTop: 20,
        fontSize: 18
    }
})













