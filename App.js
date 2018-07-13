import React from 'react'
import { Text, View } from 'react-native'
import { LandingPage, HomePage, Register, Login } from './components/index'

export default class App extends React. Component {
    constructor(props) {
        super(props)
	this.state = {
		currentComponent: 'LandingPage',
		sessid: ''
	}
	this.currentView = this.currentView.bind(this)
	this.goTo = this.goTo.bind(this)
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
	        component = <LandingPage goTo={this.goTo} />
		break;
	    case 'Register':
		component = <Register goTo={this.goTo} setSessid={this.setSessid} />
		break;
	    case 'Login':
		component = <Login goTo={this.goTo} setSessid={this.setSessid} />
		break;
	    case 'HomePage':
		component = <HomePage sessid={this.state.sessid} />
		break;
	    default:
		component = <LandingPage goTo={this.goTo} />
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


