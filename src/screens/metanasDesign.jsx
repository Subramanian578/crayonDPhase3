import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Appbar from '../components/metanasUI/appbar';
import ProjectInfo from '../components/metanasUI/projectInfo';
import TaskDetails from '../components/metanasUI/taskDetails';
import Members from '../components/metanasUI/members';
import Assets from '../components/metanasUI/assets';
import Documents from '../components/metanasUI/documentsBox';

export default function MetanasDesign() {
  return (
    <View style={styles.container}>
      <Appbar title={'Metanas UI Design'} onPress={null} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProjectInfo />
        <TaskDetails />
        <Members memberNmae={'Members'} />
        <Assets />
        <Documents />
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
