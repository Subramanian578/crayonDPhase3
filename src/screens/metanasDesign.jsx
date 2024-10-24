import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Appbar from '../components/metanasUI/Appbar';
import ProjectInfo from '../components/metanasUI/projectinfoComp/ProjectInfo';
import TaskDetails from '../components/metanasUI/taskdetailsComp/taskDetails';
import Assets from '../components/metanasUI/assetComp/Assets';
import Documents from '../components/metanasUI/documentsComp/DocumentsBox';
import BottomSheetModal from '../components/metanasUI/membersComp/MemberBottomsheet';
import Members from '../components/metanasUI/membersComp/Members';

const membersData = [
  {
    name: 'Mohammed',
    email: 'abdul_metanas@gmail.com',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/705/616/desktop-wallpaper-thalapathy-vijay-old-vijay-thumbnail.jpg',
  },
  {
    name: 'Aaban',
    email: 'aaban_metanas@gmail.com',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0m8llTmOhS4SGJDK_8Vma7_XO_VYoMO5zQ&s',
  },
  {
    name: 'Hamza',
    email: 'hamza_metanas@gmail.com',
    imageUrl:
      'https://wallpapers.com/images/hd/vijay-hd-in-sunglasses-kp6rlfk7dedjfmbw.jpg',
  },
  {
    name: 'Abbas',
    email: 'abbas_metanas@gmail.com',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/722/317/desktop-wallpaper-siva-karthikeyan-latest-siva-karthikeyan-to-sivakarthikeyan-thumbnail.jpg',
  },
];

export default function MetanasDesign() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar title={'Metanas UI Design'} onPress={null} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProjectInfo />
        <TaskDetails />
        <Members memberNmae={'Members'} onPress={() => setModalVisible(true)} />
        <Assets />
        <Documents />
      </ScrollView>

      {/* Use the Bottom Sheet Modal component */}
      <BottomSheetModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={membersData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 243, 246)',
  },
  scrollContent: {
    paddingBottom: 20,
    flexDirection: 'column',
    gap: 15,
    marginHorizontal: 15,
  },
  membersButton: {
    fontSize: 18,
    color: '#007BFF',
    marginVertical: 10,
  },
});
