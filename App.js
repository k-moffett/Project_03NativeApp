import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native';
import Routes from './src/Routes';


import Landingpage from './src/components/Landingpage';
import Register from './src/components/Register';
import Login from './src/components/Login';



export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentComponent: 'one',
    }
 
  };
  componentOne() {
    return (
      <View>
        <Landingpage />
      </View>
    )
  };

  componentTwo() {
    return (
      <View>
        <Login />
      </View>
    )
  };

  componentThree() {
    return (
      <View>
        <Register />
      </View>
    )
  };

  handleViewChange() {
    let view = ''
    switch (this.state.currentComponent) {
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


  render() {

    return (
      // <View style={styles.container}>

      //   <View>
      //     <Landingpage />
      //   </View>

      //   <View>
      //     <Register />
      //   </View>

      //   <View>
      //     <Login />
      //   </View>

      // </View>


      <View style={styles.container}>


        {this.handleViewChange()}

      </View>
    );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29377E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

