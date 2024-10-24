import {StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function AnimatedText() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View>
      <Text style={styles.desc}>Description</Text>
      <Text style={styles.para} numberOfLines={isExpanded ? undefined : 2}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident. At
        vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias.
      </Text>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={{alignItems: 'flex-end'}}>
        <Text style={styles.seeMore}>
          {isExpanded ? 'See Less' : 'See More'}
        </Text>
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
  seeMore: {
    color: 'rgb(214, 130, 0)',
    fontWeight: 'bold',
  },
});
