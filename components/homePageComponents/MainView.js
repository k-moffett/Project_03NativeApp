import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native'

export default class MainView extends React.Component {
    constructor(props) {
        super(props)
    }

    checkSessid() {
        console.log('SESSID: ',this.props.sessid)
    } 

    logout() {
        this.props.goTo('LandingPage')
    }

    createChat() {
        console.log('create chat')
    }

    render() {
        return(
            <View>
		        <Text>Main View</Text>
                
                <TouchableHighlight
                    onPress={(e) => {this.checkSessid()}}
                >
                <Text>Sessid</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={(e) => {this.logout()}}
                >
                <Text>Log Out</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={(e) => {this.createChat()}}
                >
                <Text>Create Chat</Text>
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