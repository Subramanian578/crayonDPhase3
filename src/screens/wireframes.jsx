import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Appbar from '../components/metanasUI/appbar';
import TaskInfo from '../components/wireframesPage/taskInfo';
import Checklist from '../components/wireframesPage/checklist';
import {useNavigation} from '@react-navigation/native';
import Logexpense from '../components/wireframesPage/logExpense';
import Members from '../components/metanasUI/members';
import CommentSection from '../components/wireframesPage/comments';

export default function Wireframes() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar title={'Wireframes'} onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TaskInfo />
        <Checklist />
        <Logexpense />
        <Members memberNmae={'Users'} />
        <CommentSection/>
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
