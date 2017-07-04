import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAz4GaFs61ZA5cTrjZj_GCOY_YovXz7nZo',
    authDomain: 'auth-a7d96.firebaseapp.com',
    databaseURL: 'https://auth-a7d96.firebaseio.com',
    projectId: 'auth-a7d96',
    storageBucket: 'auth-a7d96.appspot.com',
    messagingSenderId: '265683504425'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
