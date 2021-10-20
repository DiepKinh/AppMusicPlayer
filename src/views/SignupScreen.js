import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import FormButton from '../components/Login/FormButton';
import FormInput from '../components/Login/FormInput';
import SocialButton from '../components/Login/SocialButton';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an accout</Text>
      <FormInput
        placeholderText="Email"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        labelValue={email}
        onChangerText={userEmail => setEmail(userEmail)}
      />
      <FormInput
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        labelValue={password}
        onChangerText={userPassword => setPassword(userPassword)}
      />
      <FormInput
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
        labelValue={confirmPassword}
        onChangerText={userConfirmPassword =>
          setConfirmPassword(userConfirmPassword)
        }
      />
      <FormButton
        buttonTitle="Sign up"
        onPress={() => alert('Sign up Clicked!')}
      />
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our
        </Text>
        <TouchableOpacity onPress={() => alert('Sign up Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>
      <SocialButton
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      <SocialButton
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an accout? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  forgotButton: {
    marginVertical: 15,
  },
});
