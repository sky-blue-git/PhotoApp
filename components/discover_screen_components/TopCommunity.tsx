import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from '../Heading';
import { communityData } from '../../data/communityData';

const TopCommunity = () => {
  const data = communityData.slice(0, 6);

  const renderItem = ({ item }: { item: { id: number; title: string; subtitle: string; posts: number } }) => (
    <ImageBackground
      source={{ uri: `https://picsum.photos/200?random=${item.id + 100}` }}
      style={[
        styles.image,
        item.id === 1 ? { marginLeft: 32 } : item.id === data.length ? { marginRight: 32 } : null,
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
      <Heading title="Top community" navigateTo='CommunityList'/>
      <FlatList data={data} renderItem={renderItem} showsHorizontalScrollIndicator={false} horizontal />
    </View>
  );
};

export default TopCommunity;

const styles = StyleSheet.create({
  image: {
    marginVertical: 8,
    height: 160,
    width: 160,
    marginRight: 16,
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
