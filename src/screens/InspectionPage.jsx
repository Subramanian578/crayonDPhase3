import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appbar from '../components/metanasUI/Appbar';
import {useNavigation} from '@react-navigation/native';
import Tasks from '../components/InspectionPage/Tasks';

export default function InspectionPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar title={'Inspection task'} onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Tasks />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 243, 246)',
  },
  scrollContent: {
    paddingBottom: 20,
    flexDirection: 'column',
    gap: 15,
    marginHorizontal: 15,
  },
});
