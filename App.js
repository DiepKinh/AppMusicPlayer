import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import MusicPlayer from './src/components/MusicPlayer';
import WeatherApp from './src/components/WeatherApp';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <WeatherApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
