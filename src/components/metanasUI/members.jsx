import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Members({memberNmae}) {
  return (
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
  );
}

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: -10, // Overlapping effect
    borderWidth: 2,
    borderColor: '#fff', // White border around the avatar
  },
  moreCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10, // Overlapping effect
    borderWidth: 2,
    borderColor: '#fff', // White border around the circle
  },
  moreText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
