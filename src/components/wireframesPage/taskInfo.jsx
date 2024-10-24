import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AnimatedText from '../metanasUI/animatedText';
import DownArrow from '../../assets/icons/downarrow';

export default function TaskInfo() {
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={[styles.boxes, {paddingTop: 10}]}>
            <Text style={styles.title}>Task info</Text>
            <Text style={styles.ordercss}>•</Text>
            <Text style={styles.all}>05/09/23</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.allBox}>
              <View
                style={[styles.taskDetails, {gap: 5, paddingHorizontal: 5}]}>
                <Text style={styles.all}>Yet to start</Text>
                <DownArrow />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <AnimatedText />
        <View style={styles.date}>
          <View>
            <Text style={styles.desc}>Id</Text>
            <Text style={styles.data}>ID 0213</Text>
          </View>
          <View>
            <Text style={styles.desc}>Type</Text>
            <Text style={[styles.data, {fontWeight: '900'}]}>General</Text>
          </View>
          <View>
            <Text style={styles.desc}>Priority</Text>
            <Text style={[styles.data, {fontWeight: '900'}]}>Medium</Text>
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
  desc: {
    color: 'rgb(106, 113, 117)',
    paddingTop: 15,
    fontSize: 12,
    paddingBottom: 5,
  },
  ordercss: {
    color: 'grey',
    fontWeight: '900',
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  boxes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 15,
  },
  data: {
    color: 'rgb(78, 88, 94)',
    fontSize: 12,
    fontWeight: '900',
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  all: {
    color: 'rgb(12, 53, 106)',
  },
  allBox: {
    borderColor: 'rgb(12, 53, 106)',
    borderWidth: 1,
    borderRadius: 5,
  },
});
