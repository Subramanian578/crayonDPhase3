import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ProgressBar from './Progessbar';
import AnimatedText from '../AnimatedText';

export default function ProjectInfo() {
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <Text style={styles.title}>Project Info</Text>
        <AnimatedText/>
        <View style={styles.date}>
          <View>
            <Text style={styles.desc}>Start date</Text>
            <Text style={styles.data}>04/09/23</Text>
          </View>
          <View>
            <Text style={styles.desc}>End date</Text>
            <Text style={[styles.data, {fontWeight: '900'}]}>04/12/23</Text>
          </View>
          <View>
            <Text style={styles.desc}>Status</Text>
            <ProgressBar progress={50} />
          </View>
        </View>
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
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    color: 'rgb(78, 88, 94)',
    fontSize: 12,
    fontWeight: '900',
  },
});
