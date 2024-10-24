import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Appbar from '../components/metanasUI/appbar';
import {useNavigation} from '@react-navigation/native';

const documents = [
  {id: 1, title: 'Document 02', createdOn: '12/02/23'},
  {id: 2, title: 'Document 03', createdOn: '10/01/23'},
  {id: 3, title: 'Document 04', createdOn: '24/01/23'},
  {id: 4, title: 'Document 05', createdOn: '12/02/23'},
];

const DocumentCard = ({title, createdOn}) => (
  <TouchableOpacity activeOpacity={0.9}>
    <View style={styles.documentCard}>
      <View
        style={{
          backgroundColor: 'rgb(240, 243, 246)',
          margin: 15,
          borderRadius: 15,
        }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtj2T6ZEp23OpKfLL6730wA0zq11R3G0bbqqgRe3Yb728_Jftf',
          }} // Replace with your document icon URL
          style={styles.documentIcon}
        />
      </View>

      <View style={{gap: 10}}>
        <Text style={styles.documentTitle}>{title}</Text>
        <Text style={styles.documentDate}>Created on {createdOn}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function MoreDocuments() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar title={'Folder 01'} onPress={() => navigation.goBack()} />
      <View style={{paddingHorizontal: 15}}>
        <Text style={[styles.sectionHeader, {marginTop: 10}]}>
          03 Documents
        </Text>
        <FlatList
          data={documents}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <DocumentCard title={item.title} createdOn={item.createdOn} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(240, 243, 246)',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 10,
  },
  folderRow: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  folderCard: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    gap: 7,
  },
  folderIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  folderTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4A4A4A',
  },
  folderDocCount: {
    fontSize: 12,
    color: '#8F8F8F',
  },
  documentCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  documentIcon: {
    width: 40,
    height: 40,
    margin: 15,
  },
  documentTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#4A4A4A',
  },
  documentDate: {
    fontSize: 12,
    color: '#8F8F8F',
  },
});
