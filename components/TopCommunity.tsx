import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopCommunity = () => {
  const data = [
    { id: 1 , hashtag: '#Adventure' },
    { id: 2, hashtag: '#Nature' },
    { id: 3, hashtag: '#Travel' },
    { id: 4, hashtag: '#Food' },
    { id: 5, hashtag: '#Lifestyle' },
  ];

  const renderItem = ({ item }: { item: { id: number; hashtag: string } }) => (
    <ImageBackground source={{ uri: `https://picsum.photos/200?random=${item.id + 100}` }} style={[styles.image, item.id===1 ? {marginLeft: 32} : item.id===5 ? {marginRight: 32} : null]}>
      <View style={styles.imageView}>
        <Text style={styles.imageText}>{item.hashtag}</Text>
      </View>
    </ImageBackground>
  );
  
  return (
    <View>
      <FlatList data={data} renderItem={renderItem}  horizontal/>
    </View>
  )
}

export default TopCommunity

const styles = StyleSheet.create({
  image : {
    marginVertical: 8,
    height: 160,
    width: 160, 
    marginRight: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageView: {
    flex: 1,
    padding: 8,
    justifyContent: "flex-end",
  },
  imageText : {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  }
})