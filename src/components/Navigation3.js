import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class Navigation3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1e90ff" barStyle="light-content" />
        <Text style={styles.textTitle}> Login to My App </Text>
        <TextInput style={styles.textinput} placeholder="UserName" />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnItem}
            onPress={() => {
              alert('hihi');
            }}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem}>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  textTitle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'DancingScript-Bold',
    marginBottom: 20,
  },
  textinput: {
    width: '90%',
    backgroundColor: 'white',
    paddingLeft: 15,
    marginBottom: 10,
  },
  btnContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnItem: {
    width: 150,
    height: 50,
    backgroundColor: '#ffd700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
  },
});
