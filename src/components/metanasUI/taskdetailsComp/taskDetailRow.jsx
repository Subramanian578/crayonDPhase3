import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RightArrow from '../../../assets/icons/Rightarrow';

export default function TaskDetailRow({
  boxContent,
  textColor,
  textBoxColor,
  title,
  id,
  date,
  onPress
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.text}>{title}</Text>
            <View style={[styles.boxes, {paddingTop: 11}]}>
              <Text style={styles.rowText}>{id}</Text>
              <Text style={styles.ordercss}>•</Text>
              <Text style={styles.rowText}>{date}</Text>
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={[styles.allBox, {backgroundColor: textBoxColor}]}>
              <Text style={[styles.all, {color: textColor}]}>{boxContent}</Text>
            </View>
            <RightArrow />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ordercss: {
    color: 'grey',
    fontWeight: '900',
  },
  rowText: {
    color: 'rgb(106, 113, 117)',
  },
  all: {
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  allBox: {
    borderRadius: 5,
  },
  boxes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: 'rgb(78, 88, 94)',
    fontSize: 14,
    fontWeight: '900',
  },
});
