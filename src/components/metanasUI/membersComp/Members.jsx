import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { styles } from './MemberStyle';

export default function Members({memberNmae , onPress}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.mainCont}>
        <View style={styles.container}>
          <Text style={styles.label}>{memberNmae}</Text>
          <View style={styles.avatarsContainer}>
            {/* First Avatar */}
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
              }}
              style={styles.avatar}
            />
            {/* Second Avatar */}
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/c6/34/60/c6346030acb7a780af81803c84a06680.jpg',
              }}
              style={styles.avatar}
            />
            {/* Overlayed Circle with Count */}
            <View style={styles.moreCircle}>
              <Text style={styles.moreText}>+3</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
