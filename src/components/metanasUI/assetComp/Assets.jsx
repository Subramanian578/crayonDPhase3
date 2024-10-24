import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from './AssetStyle';
import { assets } from './AssetData';

const AssetCard = ({ image, title }) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
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
          {assets.map((asset) => (
            <AssetCard key={asset.id} image={asset.imageUrl} title={asset.title} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
