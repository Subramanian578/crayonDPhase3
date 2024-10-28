import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AnimatedText from '../../metanasUI/AnimatedText';
import DownArrow from '../../../assets/icons/downarrow';
import {styles} from './TaskinfoStyle';
import TaskdetailsModal from '../../metanasUI/taskdetailsComp/TaskdetailsModal';

export default function TaskInfo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ALL');

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={[styles.boxes, {paddingTop: 10}]}>
            <Text style={styles.title}>Task info</Text>
            <Text style={styles.ordercss}>•</Text>
            <Text style={styles.all}>05/09/23</Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.allBox}>
              <View
                style={[styles.taskDetails, {gap: 5, paddingHorizontal: 5}]}>
                <Text style={styles.all}>{selectedOption}</Text>
                <DownArrow />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <AnimatedText />
        <View style={styles.date}>
          <View>
            <Text style={styles.desc}>Id</Text>
            <Text style={styles.data}>ID 0213</Text>
          </View>
          <View>
            <Text style={styles.desc}>Type</Text>
            <Text style={[styles.data, {fontWeight: '900'}]}>General</Text>
          </View>
          <View>
            <Text style={styles.desc}>Priority</Text>
            <Text style={[styles.data, {fontWeight: '900'}]}>Medium</Text>
          </View>
        </View>
      </View>
      <TaskdetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleOptionSelect}
        selectedOption={selectedOption} // Pass the selected option
      />
    </View>
  );
}
