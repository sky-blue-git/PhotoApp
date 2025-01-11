import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from '../Heading';
import { hashtagData } from '../../data/hashtagData';

const HashtagList = () => {
  const data = hashtagData;

  const renderItem = ({ item }: { item: { id: number; hashtag: string; used: string } }) => (
    <View style={styles.itemContainer}>
      <ImageBackground
        source={{ uri: `https://picsum.photos/200?random=${item.id}` }}
        style={[styles.image, item.id === 50 ? {marginBottom: 32} : null]}
      >
        <View style={styles.imageView}>
          <Text style={styles.imageText}>{item.hashtag}</Text>
          <Text style={styles.imageSubText}>{item.used}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style = {{marginVertical: 32}}>
      <Heading title="Hashtags List" showButton={false} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row} 
      />
    </View>
  );
};

export default HashtagList;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 8, 
  },
  image: {
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  imageText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageSubText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
