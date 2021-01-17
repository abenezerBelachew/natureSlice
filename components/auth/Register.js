import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'

import firebase from 'firebase'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                name, 
                email
            })
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
            placeholder="name"
            onChangeText={(name) => this.setState({ name })}
          />
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
            onPress={() => this.onSignUp()}
            title="Sign Up"          
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

export default Register;
