import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import RightArrow from '../../assets/icons/Rightarrow';
import TaskDetailHeader from './taskDetailHeader';
import {useNavigation} from '@react-navigation/native';

export default function Documents() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('DocumentsPage')}>
      <View style={styles.mainCont}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <TaskDetailHeader title={'Documents'} count={'26'}/>
            <RightArrow />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    padding: 15,
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
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  count: {
    color: 'rgb(12, 53, 106)',
    fontWeight: '900',
    fontSize: 14,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  countContainer: {
    backgroundColor: 'rgb(215, 227, 255)',
    borderRadius: 50,
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
