import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myState: 'Ma State yo.',
    }
  }
  
  render() {

    return (
        <View>
            {this.state.myState}
        </View>
    );
  }
}