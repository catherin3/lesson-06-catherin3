import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// eslint-disable-next-line no-undef
export default class App extends React.Component {
  render() {
    const styles = StyleSheet.create({
      greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
      },
      boxtext: {
        textAlign: 'center',
        color: 'white',
      },
      title: {
        fontWeight: 'bold',
      },
    });
    return (
      <View>
        <Text style={[styles.greenBox, styles.boxtext, styles.title]}>
          Who We Are
        </Text>
        <Text style={[styles.greenBox, styles.boxtext, styles.title]}>
          Our People
        </Text>
        <Text style={[styles.greenBox, styles.boxtext, styles.title]}>
          Our Campus
        </Text>
      </View>
    );
  }
}
