import * as React from 'react';
import {Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <Text style={{fontSize: 24}}>RP Values</Text>
        <Text style={{color: 'green'}}>Excellence</Text>
        <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
        <Text style={{fontStyle: 'italic'}}>Integrity</Text>
        <Text style={{textAlign: 'center'}}>Teamwork</Text>
        <Text style={{backgroundColor: 'black', color: 'white'}}>
          Enterprising
        </Text>
      </View>
    );
  }
}
