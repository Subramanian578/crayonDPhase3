import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DownArrow from '../../../assets/icons/downarrow';
import TaskDetailRow from './taskDetailRow';
import TaskDetailHeader from './taskDetailHeader';
import TaskdetailsModal from './TaskdetailsModal';

export default function TaskDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ALL'); 

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <View style={[styles.taskDetails, {justifyContent: 'space-between'}]}>
          <TaskDetailHeader title={'Task details'} count={'03'} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.allBox}>
              <View style={[styles.taskDetails, {gap: 5, padding: 5}]}>
                <Text style={styles.all}>{selectedOption}</Text>
                <DownArrow />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 16}}>
          <TaskDetailRow
            boxContent={'Yet to start'}
            textColor={'rgb(223, 56, 19)'}
            textBoxColor={'rgb(255, 218, 211)'}
            title={'Wireframes'}
            id={'ID 0214'}
            date={'05/09/23'}
          />
          <View style={styles.divider} />
        </View>
        <View style={{paddingTop: 16}}>
          <TaskDetailRow
            boxContent={'In-progress'}
            textColor={'rgb(209, 120, 0)'}
            textBoxColor={'rgb(255, 221, 184)'}
            title={'Inspection'}
            id={'ID 0212'}
            date={'04/09/23'}
          />
          <View style={styles.divider} />
        </View>
        <View style={{paddingTop: 16}}>
          <TaskDetailRow
            boxContent={'Completed'}
            textColor={'rgb(0, 133, 69)'}
            textBoxColor={'rgb(203, 242, 224)'}
            title={'Base layout'}
            id={'ID 0.01'}
            date={'02/09/23'}
          />
        </View>
      </View>
      <TaskdetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleOptionSelect}
        selectedOption={selectedOption}  // Pass the selected option
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)',
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  all: {
    color: 'rgb(12, 53, 106)',
  },
  allBox: {
    borderColor: 'rgb(12, 53, 106)',
    borderWidth: 1,
    borderRadius: 5,
  },
  divider: {
    borderBottomWidth: 2,
    borderColor: '#e0e0e0',
    marginVertical: 12,
  },
});
