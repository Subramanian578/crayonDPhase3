import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import RightArrow from '../../../assets/icons/Rightarrow';
import TaskDetailHeader from '../taskdetailsComp/taskDetailHeader';
import {useNavigation} from '@react-navigation/native';
import { styles } from './DocumentStyle';

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
