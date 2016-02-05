/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class ScrollViewBug extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Hello, world.</Text>
        <TextInput style={styles.textInput} placeholder="Some text"/>
        <TextInput style={styles.textInput} placeholder="Some text"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  }
});

AppRegistry.registerComponent('ScrollViewBug', () => ScrollViewBug);
