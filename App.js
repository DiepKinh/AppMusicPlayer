import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
// import MusicPlayer from './src/components/MusicPlayer';
const App = () => {
  return (
    <View style={styles.container}>
      <Text>App MusicPlayer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
