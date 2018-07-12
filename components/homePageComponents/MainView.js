import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, TextInput } from 'react-native'

export default class MainView extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: 'Enter Chat Name Here' }
    }

    checkSessid() {
        console.log('SESSID: ',this.props.sessid)
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
                    onPress={(e) => {this.logout()}}
                >
                <Text>Log Out</Text>
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