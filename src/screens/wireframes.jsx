import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Appbar from '../components/metanasUI/Appbar';
import TaskInfo from '../components/wireframesPage/taskinfoComp/TaskInfo';
import Checklist from '../components/wireframesPage/checkListComp/CheckList';
import {useNavigation} from '@react-navigation/native';
import Logexpense from '../components/wireframesPage/logExpenseComp/LogExpense';
import Members from '../components/metanasUI/membersComp/Members';
import CommentSection from '../components/wireframesPage/Comments';
import BottomSheetModal from '../components/metanasUI/membersComp/MemberBottomsheet';

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

export default function Wireframes() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar title={'Wireframes'} onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TaskInfo />
        <Checklist />
        <Logexpense />
        <Members memberNmae={'Users'} onPress={() => setModalVisible(true)} />
        <CommentSection />
      </ScrollView>

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
});
