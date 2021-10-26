import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/Login/FormButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to home</Text>
      <FormButton buttonTitle="Logout" onPress={() => alert('Home')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9fafd',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
