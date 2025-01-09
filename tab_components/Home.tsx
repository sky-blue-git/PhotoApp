import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Heading from '../components/Heading'
import SearchBar from '../components/SearchBar'
import TopSearch from '../components/TopSearch'
import TrendingHashtags from '../components/TrendingHashtags'
import TopCommunity from '../components/TopCommunity'
import TopNomads from '../components/TopNomads'

const Home = () => {
  return (
    <ScrollView style = {styles.app}>
      <View style = {styles.container}>
        <Heading title='Discover the world' showButton={false}/>
        <SearchBar/>
        <TopSearch/>
        <Heading title='Trending hashtags' />
        <TrendingHashtags/>
        <Heading title = 'Top community'/>
        <TopCommunity/>
        <Heading title='Top nomads' />
        <TopNomads/>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  app : {
    backgroundColor: "#EFF2F6",
    flex:1
  },
  container : {
    marginTop: 64,
  },
})