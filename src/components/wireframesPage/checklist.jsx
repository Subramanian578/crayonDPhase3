import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TaskDetailHeader from '../metanasUI/taskDetailHeader';
import Checkbox from './checkbox';

export default function Checklist() {
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <TaskDetailHeader title={'Check list'} count={'04'} />
        <Checkbox />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)'
  },
});
