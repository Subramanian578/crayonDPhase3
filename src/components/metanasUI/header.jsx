import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({
  title,
  count,
  headerFontSize , 
  countFontSize=20,
  backgroundColor,
  countWrapperSize = 30,
}) => {
  const formattedCount = count < 10 ? `0${count}` : count;

  return (
    <View style={[styles.header]}>
      <Text style={[styles.headerText, { fontSize: headerFontSize, color: backgroundColor }]}>{title}</Text>
      <View
        style={[
          styles.countWrapper,
          {
            backgroundColor,
            width: countWrapperSize, 
            height: countWrapperSize, 
            borderRadius: countWrapperSize / 2, 
          },
        ]}
      >
        <Text style={[styles.countText, { fontSize: countFontSize }]}>{formattedCount}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 16,
    height: 50, 
    backgroundColor: '#fff', 
  },
  headerText: {
    fontFamily:'Poppins-SemiBold',
    marginRight: 8, 
    color: '#000',
    fontSize:20, 
  },
  countWrapper: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: '#fff', 
    fontWeight: '900',
  },
});

export default Header;
