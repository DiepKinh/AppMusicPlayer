import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MusicPlayer from './src/components/MusicPlayer';
import WeatherApp from './src/components/WeatherApp';
import LoginScreen from './src/views/LoginScreen';
import SignupScreen from './src/views/SignupScreen';
import OnboardingScreen from './src/views/OnboardingScreen';
const AppStack = createStackNavigator();

const App = () => {
  return (
    // Dành cho app WeatherApp và MusicPlayer
    // <View style={styles.container}>
    //   <StatusBar barStyle="light-content" />
    //   <WeatherApp />
    // </View>

    // Không cần navigation
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <AppStack.Screen
          name="Signup"
          component={SignupScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome
                  name="long-arrow-left"
                  size={32}
                  backgroundColor="#f9fdfa"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
      </AppStack.Navigator>
    </NavigationContainer>

    // <Providers />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
