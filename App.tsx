import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(240, 243, 246)'}}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({});
