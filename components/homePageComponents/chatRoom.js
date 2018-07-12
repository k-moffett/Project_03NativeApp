import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight  } from 'react-native'

export default class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
    }

    goBack() {
        this.props.goTo('MainView')
    }

    sendText() {
        console.log('add text to firebase')
    }

    render() {
        return(
            <View>
                <Text>Chatroom Name</Text>

                <ScrollView>
                    <Text>All chat room text will appear here</Text>
                </ScrollView>

                <TextInput></TextInput>

                <TouchableHighlight
                    onPress={(e) => {this.sendText()}}
                >
                <Text>Enter Text</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={(e) => {this.goBack()}}
                >
                <Text>Back</Text>
                </TouchableHighlight>

            </View>
        )
    }
}