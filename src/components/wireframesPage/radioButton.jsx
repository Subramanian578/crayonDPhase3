import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const RadioButton = ({label, selected, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        {selected && <View style={styles.selectedCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0c356a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 12,
    backgroundColor: '#0c356a',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default RadioButton;
