import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Appbar from '../components/metanasUI/Appbar';
import {useNavigation} from '@react-navigation/native';

// Example folder and document data
const folders = [
  {id: 1, title: 'Folder 01', documentCount: '04 documents'},
  {id: 2, title: 'Folder 02', documentCount: '02 documents'},
  {id: 3, title: 'Folder 01', documentCount: '04 documents'},
  {id: 4, title: 'Folder 02', documentCount: '02 documents'},
];

const documents = [
  {id: 1, title: 'Document 02', createdOn: '12/02/23'},
  {id: 2, title: 'Document 03', createdOn: '10/01/23'},
  {id: 3, title: 'Document 04', createdOn: '24/01/23'},
];

// Component for rendering folders
const FolderCard = ({title, documentCount, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.folderCard}
      activeOpacity={0.9}
      onPress={onPress}>
      <View>
        <Image
          source={{
            uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4NC0yNjgtcF8xLnBuZw.png',
          }} // Replace with your folder icon URL
          style={styles.folderIcon}
        />
        <Text style={styles.folderTitle}>{title}</Text>
        <Text style={styles.folderDocCount}>{documentCount}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Component for rendering documents
const DocumentCard = ({title, createdOn}) => (
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
);

export default function DocumentsPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar title={'Documents'} onPress={() => navigation.goBack()} />
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.sectionHeader}>04 Folders</Text>
        <FlatList
          data={folders}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <FolderCard
              title={item.title}
              documentCount={item.documentCount}
              onPress={() => navigation.navigate('MoreDocuments')}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.folderRow}
        />

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
