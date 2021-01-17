import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'

import firebase from 'firebase'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn() {
        const { email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.warn(result);
        })
        .catch((error) => {
            console.warn(error);
        })
    }


  render() {
    return (
      <View style={styles.registerContainer}>
          <TextInput
            placeholder="email"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />

          <Button 
            onPress={() => this.onSignIn()}
            title="Sign In"          
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
