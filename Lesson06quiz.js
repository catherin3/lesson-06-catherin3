/**
 * C308 Lesson 06 Quiz
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Button,
} from 'react-native';

const Lesson06quiz = () => {
  return (
    <ImageBackground
      source={require('./src/img/bg.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={[styles.container]}>
        <Image
          source={require('./src/img/travel_time.jpg')}
          style={{width: '50%', height: '50%', marginTop: 100}}
        />
        <Text style={[styles.titleText]}>Explore The World</Text>
        <Button onPress={() => {}} title="GET STARTED" color="#dc9b59" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Lesson06quiz;
