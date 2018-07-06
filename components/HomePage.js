import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
	console.log('homepage mounted')
        this.retrieveItem()
    } 

    async retrieveItem() {
        try {
            const retrievedItem =  await AsyncStorage.getItem('sessid');
            console.log(retrievedItem, 'should be the sessid')
        } catch (error) {
            console.log(error.message);
        }
   }

    render() {
        return(
            <View>
		<Text>Home Page</Text>
	    </View>
        )
    }
}
