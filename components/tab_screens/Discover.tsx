import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Heading from '../Heading'
import SearchBar from '../discover_screen_components/SearchBar'
import TopSearch from '../discover_screen_components/TopSearch'
import TrendingHashtags from '../discover_screen_components/TrendingHashtags'
import TopCommunity from '../discover_screen_components/TopCommunity'
import TopNomads from '../discover_screen_components/TopNomads'

const Discover = () => {
  return (
    <ScrollView style = {styles.app}>
      <View style = {styles.container}>
        <StatusBar backgroundColor="#EFF2F6" barStyle="dark-content" />
        <Heading title='Discover the world'/>
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