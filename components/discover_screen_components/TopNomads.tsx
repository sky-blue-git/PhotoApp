import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../Heading';
import { nomadsData } from '../../data/NomadsData';

const TopNomads = () => {
  const data = nomadsData

  const renderItem = ({ item }: { item: { id: number; handle: string; followers:number } }) => (
    <View style = {[styles.container, item.id===1 ? {marginLeft: 32} : item.id===5 ? {marginRight: 32} : null]}>
      <Image source={{ uri: `https://picsum.photos/140?random=${item.id + 200}` }} style={styles.image} />
      <Text style={styles.text}>{item.handle}</Text>
      <Text style={styles.subtext}>{item.followers}k followers</Text>
    </View>
  );
  
  return (
    <View>
      <Heading title='Top nomads' navigateTo='CommunityList'/>
      <FlatList data={data} renderItem={renderItem}  horizontal/>
    </View>
  )
}

export default TopNomads

const styles = StyleSheet.create({
  container : {
    alignItems: "center",
    marginRight: 16,
    marginBottom: 16,
  },
  image : {
    marginVertical: 8,
    height: 110,
    width: 110, 
    borderRadius: 55,
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
  },
  text : {
    color: "#61758e",
    fontSize: 14,
    fontWeight: "bold",
  },
  subtext : {
    color: "#61758e",
    fontSize: 10,
  },
})