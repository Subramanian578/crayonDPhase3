import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TaskDetailHeader({title , count}) {
  return (
    <View>
      <View style={[styles.taskDetails, {gap: 10}]}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{count}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  count: {
    color: 'rgb(12, 53, 106)',
    fontWeight: '900',
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  countContainer: {
    backgroundColor: 'rgb(215, 227, 255)',
    borderRadius: 50,
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
