import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Image, TextInput } from 'react-native'

export default class MainView extends React.Component {

    constructor(props) {
        super(props)
        this.state = { text: 'Enter Chat Name Here' }
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

    render() {

        return(
            <View>

                <TouchableHighlight
                    style={styles.button}
                    onPress={(e) => { this.logout() }}
                >
                    <Text style={styles.btntext}>Log Out</Text>
                </TouchableHighlight>

                <TextInput 
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <TouchableHighlight
                    onPress={(e) => {this.addChat()}}
                >
                <Text>Add Chat</Text>
                </TouchableHighlight>

                <Text>Chatrooms around me within: 1 mile</Text>

                <ScrollView>
                    {/* {[...Array(100)].map((item, index) => {
                        return(
                            <View>
                                <Text>{index}</Text>
                            </View>
                        )
                    })} */}

                <TouchableHighlight
                    onPress={(e) => {console.log('button click motherfucker.')}}
                >
                <Text>This is what a chatroom button will look like</Text>
                </TouchableHighlight>

                </ScrollView>

                {/*Test*/}
                <TouchableHighlight
                    onPress={(e) => {this.checkSessid()}}
                >
                <Text>Sessid</Text>
                </TouchableHighlight>

                {/*Test*/}
                <TouchableHighlight
                    onPress={(e) => {this.enterChat()}}
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
        // alignItems: 'center',
        // justifyContent: 'center',
        height: '100%',
    },
    logo: {
      
        width: 200,
        height: 30,
        marginBottom: 20,
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



