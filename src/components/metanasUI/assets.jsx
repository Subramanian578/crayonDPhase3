import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

// Example asset data with network images
const assets = [
  {
    id: 1,
    title: 'JCB',
    imageUrl:
      'https://p7.hiclipart.com/preview/150/393/86/jcb-fastrac-agriculture-tractor-agricultural-machinery-tractor.jpg', // Replace with actual URL
  },
  {
    id: 2,
    title: 'Asset Name',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMV2Vxh2MsQvrhb6aIUv1Q26jKI08L4OKFU2gG0dNmktPk1dly4SAPtk_nrBcCcSmFrk&usqp=CAU', // Replace with actual URL
  },
  {
    id: 3,
    title: 'Laptop Dell',
    imageUrl:
      'https://image.similarpng.com/very-thumbnail/2021/08/Laptop-device-mock-up-on-transparent-background-PNG.png', // Replace with actual URL
  },
  {
    id: 4,
    title: 'Laptop',
    imageUrl:
      'https://image.similarpng.com/very-thumbnail/2021/08/Laptop-device-mock-up-on-transparent-background-PNG.png', // Replace with actual URL
  },
];

const AssetCard = ({image, title}) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
  </View>
);

export default function AssetList() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assets</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.assetsContainer}>
          {assets.map(asset => (
            <AssetCard
              key={asset.id}
              image={asset.imageUrl}
              title={asset.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)'
  },
  header: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 10,
  },
  assetsContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    alignItems: 'center',
    marginRight: 15, // Add margin to space out cards
  },
  card: {
    width: 100,
    height: 100, // Square-shaped card
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardTitle: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
