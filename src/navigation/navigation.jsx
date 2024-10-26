import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import MetanasDesign from '../screens/Metanasdesign';
import Wireframes from '../screens/Wireframes';
import DocumentsPage from '../screens/Documents';
import MoreDocuments from '../screens/DocumentNavi';
import InspectionPage from '../screens/InspectionPage';
import BaseLayout from '../screens/BaseLayout';

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
        <Stack.Screen name="InspectionPage" component={InspectionPage} />
        <Stack.Screen name="BaseLayout" component={BaseLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
