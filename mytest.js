import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  
  submitUserInfo() {
    console.log('handleSubmitUserInfoYOO')
    // http working. 
    // https not working. maybe something with the ec2 security group settings?
    fetch('http://ec2-54-89-68-6.compute-1.amazonaws.com/signUp', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password
      })
    })
  }
  
  render() {

    return (
      <View style={styles.container}>
      <Text>Name:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
      <Text>Password:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          onPress={(e) => {this.submitUserInfo()}}
          title="Submit user info"
          color="#841584"
          accessibilityLabel="Submit user info"
        />
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






import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    submitUserInfo() {
        console.log('handleSubmitUserInfoYOO')
        // http working. 
        // https not working. maybe something with the ec2 security group settings?
        fetch('http://ec2-54-89-68-6.compute-1.amazonaws.com/signUp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
    }

    render() {
        return (
            // <View style={styles.container}>
            <View >
                <Text>Register Form</Text>
                <Text>User Name:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <Text>email:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <Text>Password:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button
                    onPress={(e) => { this.submitUserInfo() }}
                    title="Submit user info"
                    color="#841584"
                    accessibilityLabel="Submit user info"
                />
            </View>


        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

export default Register;







import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

class Register extends React.Component {


    render() {
        return (

            <View style={styles.regform}>
                <Text style={styles.header}>Registeration </Text>

                <TextInput
                    style={styles.textinput}
                    placeholder="Display Name"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="email"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <TextInput
                    style={styles.textinput}
                    placeholder="password"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity >

            </View >





        );
    }
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignSelf: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30
    },
    btntext: {
        color: '#fff',
        frontWeight: 'bold'
    }
});

export default Register;


// Register

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    submitUserInfo() {
        console.log('handleSubmitUserInfoYOO')
        // http working. 
        // https not working. maybe something with the ec2 security group settings?
        fetch('http://ec2-54-89-68-6.compute-1.amazonaws.com/signUp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
    }

    render() {
        return (
            // <View style={styles.container}>
            <View >
                <Text>Register Form</Text>
                <Text>User Name:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <Text>email:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <Text>Password:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button
                    onPress={(e) => { this.submitUserInfo() }}
                    title="Submit user info"
                    color="#841584"
                    accessibilityLabel="Submit user info"
                />
            </View>


        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

export default Register;


// LNDINGPAGE

import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


// const ACCESS_TOKEN = 'access_token';

class Landingpage extends React.Component {
    constructor(props) {
        super(props)
        this.updateComponentState = this.updateComponentState.bind(this)
    }
    // componentWillMount() {
    //     this.getToken();
    // }

    navigate(routeName) {
        this.props.navigator.push({
            name: routeName
        });
    }

    // async getToken() {
    //     try {
    //         let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
    //         if (!accessToken) {
    //             console.log("Token not set");
    //         } else {
    //             this.verifyToken(accessToken)
    //         }
    //     } catch (error) {
    //         console.log("Something went wrong");
    //     }
    // }
    //If token is verified we will redirect the user to the home page
    // async verifyToken(token) {
    //     let accessToken = token

    //     try {
    //         let response = await fetch('????????????????????????????????????????????????????????????????' + accessToken);
    //         let res = await response.text();
    //         if (response.status >= 200 && response.status < 300) {
    //             //Verified token means user is logged in so we redirect him to home.
    //             this.navigate('home');
    //         } else {
    //             let error = res;
    //             throw error;
    //         }
    //     } catch (error) {
    //         console.log("error response: " + error);
    //     }
    // }

    updateComponentState() {
        this.props.updateviewState('Register')
    }

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.title}>Down 2 </Text>

                <Button style={styles.buttonText}
                    title="Create Account"
                    onPress={this.updateComponentState()}

                />

                <Button style={styles.buttonText}
                    title="Login"

                />
                <Text style={styles.text}>Forgot Password?</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingTop: 180
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    title: {
        fontSize: 25,
        marginBottom: 15
    }
});




export default Landingpage;



handleComponentChange() {
    let currentView = ""
    switch(this.state.currentView){
      case 'LandingPage':
        currentView = <Landingpage />
        break;
      case 'Resister':
        currentView = <Register />
        break;
      case 'Login':
        currentView = <Login />
        break;
    }
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingTop: 180
    },
    logo: {
        width: 250,
        height: 40,
        marginBottom: 40

    },
    button: {
        height: 50,
        backgroundColor: 'grey',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    title: {
        fontSize: 25,
        marginBottom: 15
    }
});


<Text style={styles.title}>SurrounDM </Text>

<TouchableHighlight
    // onPress={this.navigate.bind(this, 'register')}
    style={styles.button}>
    <Text style={styles.buttonText}>Create Account</Text>
</TouchableHighlight>

<TouchableHighlight
    // onPress={this.navigate.bind(this, 'login')}
    style={styles.button}>
    <Text style={styles.buttonText}>Log In</Text>
</TouchableHighlight>
<Text style={styles.text}>Forgot Password?</Text>
