import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

export default function AnimatedText() {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current; // Initial animation height value
  
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isExpanded ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isExpanded, animation]);

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [39, 158], // Adjust these values for collapsed and expanded height
  });

  return (
    <View>
      <Text style={styles.desc}>Description</Text>
      <Animated.View style={{ height: heightInterpolate, overflow: 'hidden' }}>
        <Text style={styles.para}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias.
        </Text>
      </Animated.View>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.seeMoreContainer}>
        <Text style={styles.seeMore}>{isExpanded ? 'See Less' : 'See More'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  para: {
    color: 'rgb(78, 88, 94)',
    fontSize: 14,
    fontWeight: '600',
  },
  desc: {
    color: 'rgb(106, 113, 117)',
    paddingTop: 15,
    fontSize: 12,
    paddingBottom: 5,
  },
  seeMoreContainer: {
    alignItems: 'flex-end',
  },
  seeMore: {
    color: 'rgb(214, 130, 0)',
    fontWeight: 'bold',
  },
});
