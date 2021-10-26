import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../components/Login/FormButton';
import FormInput from '../components/Login/FormInput';
import SocialButton from '../components/Login/SocialButton';

import {AuthContext} from '../navigation/AuthProvider';

import {windowHeight, windowWidth} from '../utils/Dimentions';
const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/login/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RN Social App</Text>
      <FormInput
        labelValue={email}
        onChangerText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangerText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      {/* <TextInput
        value={email}
        style={styles.input}
        numberOfLines={1}
        onChangerText={setEmail}
        placeholder="Email"
        placeholderTextColor="#666"
      />
      <TextInput
        value={password}
        style={styles.input}
        numberOfLines={1}
        onChangerText={setPassword}
        placeholder="Password"
        placeholderTextColor="#666"
      /> */}
      <FormButton
        buttonTitle="Sign in"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => alert('Forgot Password?')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an accout? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    color: '#333',
    padding: 10,
    flex: 1,
    fontFamily: 'Lato-Regular',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 3,
    borderWidth: 1,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafd',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
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
  forgotButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
