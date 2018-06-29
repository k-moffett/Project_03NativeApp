import React from 'react'
import { Text, View } from 'react-native'
import { LandingPage, HomePage, Register, Login } from './components/index'

export default class App extends React. Component {
    constructor(props) {
        super(props)
	this.state = {
		currentComponent: 'LandingPage'
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
		component = <Register goTo={this.goTo} />
		break;
	    case 'Login':
		component = <Login goTo={this.goTo} />
		break;
	    case 'HomePage':
		component = <HomePage goTo={this.goTo} />
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


