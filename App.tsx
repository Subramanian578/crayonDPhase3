import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(240, 243, 246)'}}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({});
