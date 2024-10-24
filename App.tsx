import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Navigation from './src/navigation/navigation';
import MetanasDesign from './src/screens/metanasDesign';
import Navigation from './src/navigation/navigation';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(240, 243, 246)'}}>
      <Navigation/>
      {/* <MetanasDesign/> */}
    </View>
  );
}

const styles = StyleSheet.create({});
