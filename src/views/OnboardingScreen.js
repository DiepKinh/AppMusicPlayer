import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => <Button title="Skip" color="#000000" {...props} />;
const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Done</Text>
  </TouchableOpacity>
);
const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      //4 dòng này không có vẫn đẹp rồi!
      // SkipButtonComponent={Skip}
      // NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../assets/images/login/onboarding-img1.png')}
            />
          ),
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../assets/images/login/onboarding-img2.png')}
            />
          ),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../assets/images/login/onboarding-img3.png')}
            />
          ),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
