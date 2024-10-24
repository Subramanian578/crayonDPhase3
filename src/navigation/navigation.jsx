import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import MetanasDesign from '../screens/metanasDesign';
import Wireframes from '../screens/wireframes';
import DocumentsPage from '../screens/documents';
import MoreDocuments from '../screens/documentNavi';

const Stack = createNativeStackNavigator ();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="MetanasDesign">
        <Stack.Screen name="MetanasDesign" component={MetanasDesign} />
        <Stack.Screen name="DocumentsPage" component={DocumentsPage} />
        <Stack.Screen name="MoreDocuments" component={MoreDocuments} />
        <Stack.Screen name="Wireframes" component={Wireframes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
