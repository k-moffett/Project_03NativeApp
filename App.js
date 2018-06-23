import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  
  componentDidMount() {
    this.setInitialState()
  }

  setInitialState() {
    fetch('http://ec2-54-144-190-124.compute-1.amazonaws.com/')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.item)
      this.setState({
        test: responseJson.item
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  
  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.test}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
