import React from 'react'
import { View, AsyncStorage } from 'react-native'
import { LandingPage, MainView, ChatRoom } from './homePageComponents/index'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentComponent: 'MainView',
            sessid: ''
        }
        this.currentView = this.currentView.bind(this)
        this.goTo = this.goTo.bind(this)
    }

    componentWillMount() {
        this.retrieveItem()
    } 

    async retrieveItem() {
        try {
            const retrievedItem =  await AsyncStorage.getItem('sessid');
            this.setState({
                sessid: retrievedItem
            })
        } catch (error) {
            console.log(error.message);
        }
   }

   goTo(component) {
        this.setState({
        currentComponent: component
    })
}

    currentView() {
        let component
        switch(this.state.currentComponent) {
        case 'LandingPage':
            component = <LandingPage />
        break;
        case 'ChatRoom':
            component = <ChatRoom goTo={this.goTo} />
        break;
        case 'MainView':
            component = <MainView sessid={this.state.sessid} goTo={this.goTo} />
        default:
        component = <MainView sessid={this.state.sessid} goTo={this.goTo} />
    }
    return component;
  }

    render() {
        return(
            <View>
            {this.currentView()}
            </View>
        )
    }
}
