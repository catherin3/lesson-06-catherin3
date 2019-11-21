/**
 * C308 LESSON 06
 *
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

const App = () => {
  return (
    <ImageBackground
      source={require('./src/img/rainforest_bg.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={[styles.container]}>
        <Text style={[styles.header]}>BuzzForest</Text>
        <Image
          source={require('./src/img/orangutan.jpg')}
          style={{width: 375, height: 200, marginTop: 20}}
        />
        <View style={[styles.section]}>
          <Button
            onPress={() => {
              alert('[button title] button pressed!');
            }}
            title="Animals"
            color="#bf4216"
          />
          <Text style={{color: 'white'}}>
            See the animal exhibits,discover the secrets about the animals we
            love and how they are cared for daily.Seize the opportunity to
            interact with some of the animals.
          </Text>
        </View>

        <View style={[styles.section]}>
          <Button
            onPress={() => {
              alert('[button title] button pressed!');
            }}
            title="Activities"
            color="#bf4216"
          />
          <Text style={{color: 'white'}}>
            You, not only get to see animals, but all visitors can satisfy their
            curiosity,feed the animals and get up-close with the animals and
            have fun.
          </Text>
        </View>

        <View style={[styles.section]}>
          <Button
            onPress={() => {
              alert('[button title] button pressed!');
            }}
            title="Find Us"
            color="#bf4216"
          />
          <Text style={{color: 'white'}}>
            Making your way to BuzzForest is easy. No matter where you are,
            there are many quick and convenient ways to find us.
          </Text>
          <Text
            style={{backgroundColor: 'white', color: 'black', padding: 5}}
          />
        </View>
        <Text style={{backgroundColor: 'white', color: 'black', padding: 5}} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  section: {
    backgroundColor: '#557622',
    color: '#f4f3e4',
    fontSize: 12,
    width: 375,
    marginTop: 20,
    marginBottom: 20,
  },
  buttons: {
    color: '#bf4216',
    width: 375,
    height: 180,
    marginTop: 20,
  },
  header: {
    color: '#3f300e',
    fontSize: 20,
    backgroundColor: '#e1ddaa',
    padding: 20,
    width: 415,
  },
});
export default App;
