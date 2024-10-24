import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Backarrow from '../../assets/icons/Backarrow';

export default function Appbar({title , onPress}) {
  return (
    <View>
      <View style={styles.appbar}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onPress}>
            <Backarrow />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 15,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '900',
    paddingLeft: 16,
  },
  iconContainer: {
    borderRadius: 25,
  },
});
