import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AnimatedText from '../metanasUI/AnimatedText';
import DownArrow from '../../assets/icons/downarrow';
import TaskdetailsModal from '../metanasUI/taskdetailsComp/TaskdetailsModal';
import QRCode from '../../assets/icons/QrCode';
import TaskDetailHeader from '../metanasUI/taskdetailsComp/taskDetailHeader';
import Checkbox from '../wireframesPage/checkListComp/CheckBox';

export default function Tasks() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ALL');

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.rowSpaceBetween}>
          <View style={[styles.boxes, styles.boxesPadding]}>
            <Text style={styles.title}>Task info</Text>
            <Text style={styles.ordercss}>•</Text>
            <Text style={styles.all}>05/09/23</Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.allBox}>
              <View style={[styles.taskDetails, styles.gapPadding]}>
                <Text style={styles.all}>{selectedOption}</Text>
                <DownArrow />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <AnimatedText />
        <View style={styles.columnGap}>
          <View style={styles.date}>
            <View>
              <Text style={styles.desc}>Id</Text>
              <Text style={styles.data}>ID 0213</Text>
            </View>
            <View>
              <Text style={styles.desc}>Type</Text>
              <Text style={[styles.data, styles.boldText]}>General</Text>
            </View>
            <View>
              <Text style={styles.desc}>Priority</Text>
              <Text style={[styles.data, styles.boldText]}>Medium</Text>
            </View>
          </View>
          <View style={styles.date}>
            <View>
              <Text style={styles.desc}>Estimated hours</Text>
              <Text style={[styles.data, styles.boldText]}>04 Hours</Text>
            </View>
            <View>
              <Text style={styles.desc}>Location</Text>
              <Text style={[styles.data, styles.boldText]}>
                King Fahd Road, Riyadh.
              </Text>
            </View>
            <View></View>
          </View>
          <View style={styles.date}>
            <View>
              <Text style={styles.desc}>Check-in time</Text>
              <Text style={[styles.data, styles.boldText]}>-</Text>
            </View>
            <View>
              <Text style={styles.desc}>Check-out time</Text>
              <Text style={[styles.data, styles.boldText]}>-</Text>
            </View>
            <View>
              <Text>Priority</Text>
              <Text>Medium</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.qrCodeButton}>
          <View style={styles.qrCodeContainer}>
            <Text style={styles.desc1}>View QR Code</Text>
            <QRCode />
          </View>
        </TouchableOpacity>
        <TaskDetailHeader title={'Check list'} count={'02'} />
        <View>
          <Checkbox />
        </View>
      </View>
      <View style={styles.divider} />
      <TouchableOpacity style={[styles.button, styles.submitButton , {marginHorizontal: 15,marginBottom: 15,}]}>
        <Text style={styles.submitText}>Check-in</Text>
      </TouchableOpacity>
      <TaskdetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleOptionSelect}
        selectedOption={selectedOption} // Pass the selected option
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
  paddingContainer: {
    padding: 15,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  boxesPadding: {
    paddingTop: 10,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
  },
  ordercss: {
    color: 'grey',
    fontWeight: '900',
  },
  all: {
    color: 'rgb(12, 53, 106)',
  },
  allBox: {
    borderColor: 'rgb(12, 53, 106)',
    borderWidth: 1,
    borderRadius: 5,
  },
  taskDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gapPadding: {
    gap: 5,
    paddingHorizontal: 5,
  },
  columnGap: {
    flexDirection: 'column',
    gap: 10,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    color: 'rgb(106, 113, 117)',
    paddingTop: 15,
    fontSize: 12,
    paddingBottom: 5,
  },
  data: {
    color: 'rgb(78, 88, 94)',
    fontSize: 12,
    fontWeight: '900',
  },
  boldText: {
    fontWeight: '900',
  },
  desc1: {
    color: 'black',
    fontSize: 12,
  },
  qrCodeButton: {
    borderColor: 'rgb(217, 219, 221)',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
  },
  qrCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#0c356a',
  },
  submitText: {
    padding: 15,
    color: 'white',
    fontWeight: '900',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgb(222, 224, 225)',
    marginVertical: 10,
  },
});
