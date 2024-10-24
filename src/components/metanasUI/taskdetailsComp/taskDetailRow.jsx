import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import RightArrow from '../../../assets/icons/Rightarrow';
import {useNavigation} from '@react-navigation/native';

export default function TaskDetailRow({
  boxContent,
  textColor,
  textBoxColor,
  title,
  id,
  date,
}) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.text}>{title}</Text>
          <View style={[styles.boxes, {paddingTop: 10}]}>
            <Text style={styles.rowText}>{id}</Text>
            <Text style={styles.ordercss}>•</Text>
            <Text style={styles.rowText}>{date}</Text>
          </View>
        </View>
        <View style={styles.boxes}>
          <TouchableOpacity onPress={() => navigation.navigate('Wireframes')}>
            <View style={[styles.allBox, {backgroundColor: textBoxColor}]}>
              <Text style={[styles.all, {color: textColor}]}>{boxContent}</Text>
            </View>
          </TouchableOpacity>
          <RightArrow />
        </View>
      </View>
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
