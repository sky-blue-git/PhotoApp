import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from '../Heading';
import { hashtagData } from '../../data/hashtagData';
import Header from '../Header';
import { communityData } from '../../data/communityData';

const CommunityList = () => {
  const data = communityData;

  // const renderItem = ({ item }: { item: { id: number; hashtag: string; used: string } }) => (
  //   <View style={styles.itemContainer}>
  //     <ImageBackground
  //       source={{ uri: `https://picsum.photos/200?random=${item.id}` }}
  //       style={[styles.image, item.id === 50  ? {marginBottom: 96} : ((item.id === 1 || item.id === 2)   ? {marginTop: 12} : null) ]}
  //     >
  //       <View style={styles.imageView}>
  //         <Text style={styles.imageText}>{item.hashtag}</Text>
  //         <Text style={styles.imageSubText}>{item.used}</Text>
  //       </View>
  //     </ImageBackground>
  //   </View>
  // );
  const renderItem = ({ item }: { item: { id: number; title: string; subtitle: string; posts: number } }) => (
      <ImageBackground
        source={{ uri: `https://picsum.photos/200?random=${item.id + 100}` }}
        style={[
          styles.image,
          item.id === 1 ? { marginTop: 32 } : item.id === data.length ? { marginBottom: 96 } : null,
        ]}
      >
        <Text style={styles.posts}>{item.posts} posts/day</Text>
        <View style={styles.imageView}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </ImageBackground>
    );

  return (
    <View>
      <Header title="Page Title" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CommunityList;

const styles = StyleSheet.create({
  image: {
    marginVertical: 8,
    height: 160,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  posts: {
    position: 'absolute',
    top: 4,
    right: 0,
    color: '#ffffff',
    fontSize: 12,
    paddingHorizontal: 6,
  },
  imageView: {
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
