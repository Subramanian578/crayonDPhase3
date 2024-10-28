import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {styles} from './MemberBottomStyle';

const BottomSheetModal = ({visible, onClose, data}) => {
  const renderMemberItem = ({item}) => (
    <View style={styles.modalContent}>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.avatar}
      />
      <View style={{flexDirection: 'column', gap: 5}}>
        <Text style={styles.memberName}>{item.name}</Text>
        <Text style={styles.memberEmail}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity  style={styles.modalContainer} onPress={onClose} activeOpacity={1}>
        <View>
          <View style={styles.bottomSheet}>
            <Text style={styles.sheetTitle}>Members</Text>
            <Text style={styles.memberCount}>{`${String(data.length).padStart(
              2,
              '0',
            )} Members`}</Text>
            <FlatList
              data={data}
              keyExtractor={item => item.email}
              renderItem={renderMemberItem}
            />
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomSheetModal;
