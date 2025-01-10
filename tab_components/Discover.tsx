import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Heading from '../components/Heading'
import SearchBar from '../components/SearchBar'
import TopSearch from '../components/TopSearch'
import TrendingHashtags from '../components/TrendingHashtags'
import TopCommunity from '../components/TopCommunity'
import TopNomads from '../components/TopNomads'

const Discover = () => {
  return (
    <ScrollView style = {styles.app}>
      <View style = {styles.container}>
        <StatusBar backgroundColor="#EFF2F6" barStyle="dark-content" />
        <Heading title='Discover the world' showButton={false}/>
        <SearchBar/>
        <TopSearch/>
        <TrendingHashtags/>
        <TopCommunity/>
        <TopNomads/>
      </View>
    </ScrollView>
  )
}

export default Discover

const styles = StyleSheet.create({
  app : {
    backgroundColor: "#EFF2F6",
    flex:1
  },
  container : {
    marginTop: 64,
  },
})