import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../Heading';
import { hashtagData } from '../../data/hashtagData';

const TrendingHashtags = () => {
  const data = hashtagData.slice(0, 6);
  
  const renderItem = ({ item }: { item: { id: number; hashtag: string, used:string } }) => (
    <ImageBackground source={{ uri: `https://picsum.photos/200?random=${item.id}` }} style={[styles.image, item.id===1 ? {marginLeft: 32} : item.id===6 ? {marginRight: 32} : null]}>
      <View style={styles.imageView}>
        <Text style={styles.imageText}>{item.hashtag}</Text>
        <Text style={styles.imageSubText}>{item.used}</Text>
      </View>
    </ImageBackground>
  );
  
  return (
    <View>
      <Heading title='Trending hashtags' navigateTo='HashtagList'/>
      <FlatList data={data} renderItem={renderItem}  showsHorizontalScrollIndicator={false} horizontal />
    </View>
  )
}

export default TrendingHashtags

const styles = StyleSheet.create({
  image : {
    marginTop: 8,
    marginBottom: 24,
    height: 160,
    width: 160, 
    marginRight: 16,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent:"flex-end"
  },
  imageView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingVertical: 10,
    marginHorizontal:6,
  },
  imageText : {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageSubText : {
    color: "#ffffff",
    fontSize: 14,
  }
})