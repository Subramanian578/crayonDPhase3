import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Closeicon from '../../../assets/icons/closeicon';

export default function TaskdetailsModal({visible, onClose, onSelect, selectedOption}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose} />
      <View style={styles.modalContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Change Status</Text>
          <TouchableOpacity onPress={onClose}>
            <Closeicon />
          </TouchableOpacity>
        </View>

        {/* Map through the options and conditionally apply styles based on the selected option */}
        {['ALL', 'Yet to start', 'In-progress', 'Completed'].map(item => (
          <TouchableOpacity key={item} onPress={() => onSelect(item)}>
            <View
              style={[
                styles.option,
                selectedOption === item && styles.selectedOption, // Apply background color if selected
              ]}>
              <Text
                style={[
                  styles.optionText,
                  selectedOption === item && styles.selectedOptionText, // Apply text color if selected
                ]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  option: {
    paddingVertical: 15,
    backgroundColor: 'white', // Default background color
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: 'rgb(215, 227, 255)', // Background color for selected item
  },
  optionText: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 15,
  },
  selectedOptionText: {
    fontWeight: 'bold',
    color: 'rgb(12, 53, 106)',
  },
  title: {
    color: 'black',
    fontWeight: '900',
  },
});
