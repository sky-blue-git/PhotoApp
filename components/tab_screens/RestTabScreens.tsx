import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RestTabScreens = () => {
  return (
    <View style = {styles.container}>
      <StatusBar backgroundColor="#EFF2F6" barStyle="dark-content" />
      <Text style = {styles.text}>Go to Discover Tab</Text>
    </View>
  )
}

export default RestTabScreens

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text : {
    fontSize: 32,
    fontWeight: "bold",
    color: "#61758e",
  }
})