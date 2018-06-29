import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Test from './components/test'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
        currentComponent: 'one',
    };
	this.viewOne = this.viewOne.bind(this)
	this.viewTwo = this.viewTwo.bind(this)
	this.viewThree = this.viewThree.bind(this)
  };

  componentOne(){
    return(
      <View>
        <Text>Component One</Text>
      </View>
    )
  };

  componentTwo(){
    return(
      <View>
        <Text>Component Two</Text>
      </View>
    )
  };

 componentThree(){
    return(
      <View>
        <Text>Component Three</Text>
     </View>
    )
 };

 handleViewChange() {
    let view = ''
    switch(this.state.currentComponent) {
	case 'one':
		view = this.componentOne()
	break;
	case 'two':
		view = this.componentTwo()
	break;
	case 'three':
		view = this.componentThree()
	break;
	default:
		view = this.componentOne()

    };
    return view;
 };
 
 viewOne() {
	this.setState({
		currentComponent: 'one'
	});
 };

 viewTwo() {
	this.setState({
		currentComponent: 'two'
	});
 };

 viewThree() {
 	this.setState({
		currentComponent: 'three'
	});
 };

  render() {

    return (
	<View style={styles.mainView} >
	    <Button
	      onPress={this.viewOne}
	     title="View One"
	     color="blue"
	    
	    />
	    <Button
	      onPress={this.viewTwo}
	     title="View Two"
	     color="blue"
	    
	    />
	    <Button
	      onPress={this.viewThree}
	     title="View Three"
	     color="blue"
	    
	    />
	    {this.handleViewChange()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
  	marginTop: '25%',  
  }
 });


