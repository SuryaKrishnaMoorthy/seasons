import React from 'react';
import { StyleSheet, Text, View,Header } from 'react-native';
import AppContainer from "./src/navigation/AppNavigator";


export default class App extends React.Component {
  render() {
    return <AppContainer />
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
