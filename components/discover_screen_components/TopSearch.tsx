import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopSearch = () => {
  return (
    <View>
      <ImageBackground source={{uri: "https://picsum.photos/200/352"}} style={styles.image}>
        <View style={styles.imageView}>
          <Text style={styles.imageText}>
            #Top search of the day
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default TopSearch

const styles = StyleSheet.create({
  image : {
    marginHorizontal: 32,
    marginVertical: 24,
    height: 200,
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