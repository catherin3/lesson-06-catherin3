import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground, Button} from 'react-native';

export default class App extends React.Component {
  render() {
    const styles = StyleSheet.create({
      boxStyle: {
        width: 150,
        height: 150,
        padding: 20,
        backgroundColor: '#00629e',
      },
    });

    return (
      <View style={{marginTop: 25}}>
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1499560470475-3c75b259add8?ixlib=rb-1.2.1&q=8',
          }}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.boxStyle}>
            <Button
              onPress={() => {
                alert('Display!');
              }}
              title="Press Me"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
