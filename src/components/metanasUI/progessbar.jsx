import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      
      {/* Percentage Text */}
      <Text style={styles.percentageText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarBackground: {
    height: 10,
    width: 100, // You can adjust the width as needed
    backgroundColor: 'rgb(203, 242, 224)', // Light green background
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'rgb(0, 133, 69)', // Solid green fill
    borderRadius: 5,
  },
  percentageText: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '600',
    color: 'rgb(78, 88, 94)', // Same color as your image
  },
});

export default ProgressBar;
