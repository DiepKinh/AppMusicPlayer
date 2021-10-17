import React, {useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Locations from '../model/locations';

import SunIcon from '../assets/images/weather/sun.svg';
import CloudIcon from '../assets/images/weather/sun.svg';
import MoonIcon from '../assets/images/weather/sun.svg';
import RainIcon from '../assets/images/weather/sun.svg';

import MenuIcon from '../assets/images/weather/menu.svg';
import SearchIcon from '../assets/images/weather/search.svg';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const WeatherIcon = weatherType => {
  if (weatherType === 'Sunny') {
    return <Ionicons name="sunny-outline" size={34} color="#fff" />;
  }
  if (weatherType === 'Rainy') {
    return <Ionicons name="rainy-outline" size={34} color="#fff" />;
  }
  if (weatherType === 'Cloudy') {
    return <Ionicons name="partly-sunny-outline" size={34} color="#fff" />;
  }
  if (weatherType === 'Night') {
    return <Ionicons name="moon-outline" size={34} color="#fff" />;
  }
};

// import night2 from '../assets/images/weather/night2.jpg';
const WeatherApp = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();

  let bgImg = require('../assets/images/weather/sunny.jpg');

  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={1}>
        {Locations.map((location, index) => {
          if (location.weatherType === 'Sunny') {
            bgImg = require('../assets/images/weather/sunny.jpg');
          } else if (location.weatherType === 'Night') {
            bgImg = require('../assets/images/weather/night2.jpg');
          } else if (location.weatherType === 'Cloudy') {
            bgImg = require('../assets/images/weather/cloudy.jpeg');
          } else if (location.weatherType === 'Rainy') {
            bgImg = require('../assets/images/weather/rainy.jpg');
          }

          return (
            <View
              style={{width: windowWidth, height: windowHeight}}
              key={index}>
              <ImageBackground source={bgImg} style={styles.imgBackground}>
                <View style={styles.viewLocation}>
                  <View style={styles.topInfoWrappe}>
                    <View>
                      <Text style={styles.textCity}>{location.city}</Text>
                      <Text style={styles.textDateTime}>
                        {location.dateTime}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textTemparature}>
                        {location.temparature}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        {WeatherIcon(location.weatherType)}
                        <Text style={styles.textWeatherType}>
                          {location.weatherType}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.lineBottom}></View>
                  <View style={styles.bottomInfoWrappe}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Wind</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.wind}
                      </Text>
                      <Text style={styles.infoText}>km/h</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={[
                            styles.infoBarChild,
                            {width: location.wind / 2.2},
                          ]}
                        />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Rain</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.rain}
                      </Text>
                      <Text style={styles.infoText}>%</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={[
                            styles.infoBarChild,
                            {width: location.rain / 2.2},
                            {backgroundColor: '#F44336'},
                          ]}
                        />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.infoText}>Humidity</Text>
                      <Text style={[styles.infoText, {fontSize: 24}]}>
                        {location.humidity}
                      </Text>
                      <Text style={styles.infoText}>%</Text>
                      <View style={styles.infoBar}>
                        <View
                          style={[
                            styles.infoBarChild,
                            {width: location.humidity / 2.2},
                            {backgroundColor: '#F44336'},
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.appHeader}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.indicatorWrapper}>
        {Locations.map((location, index) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (index - 1),
              windowWidth * index,
              windowWidth * (index + 1),
            ],
            outputRange: [5, 12, 5],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={index} style={[styles.normalDot, {width}]} />
          );
        })}
      </View>
    </>
  );
};
export default WeatherApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  imgBackground: {flex: 1},
  topInfoWrappe: {
    flex: 1,
    marginTop: 120,
    justifyContent: 'space-between',
  },
  viewLocation: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  textCity: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  textDateTime: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  textTemparature: {
    color: '#fff',
    fontSize: 86,
    fontFamily: 'Lato-Light',
  },
  textWeatherType: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    lineHeight: 24,
    marginLeft: 10,
  },
  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  indicatorWrapper: {
    position: 'absolute',
    top: 120,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineBottom: {
    borderBottomColor: 'rgba(255,255,255,0.7)',
    marginTop: 20,
    borderBottomWidth: 1,
  },
  bottomInfoWrappe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  infoBar: {
    width: 45,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  infoBarChild: {
    height: 5,
    backgroundColor: '#96F0AE',
  },
});
