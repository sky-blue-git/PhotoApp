import { StyleSheet, View } from 'react-native'
import React from 'react'
import SearchBar from './components/SearchBar'
import TopSearch from './components/TopSearch'
import Heading from './components/Heading'
import TrendingHashtags from './components/TrendingHashtags'

const App = () => {
  return (
    <View style = {styles.app}>
      <View style = {styles.container}>
        <Heading title='Discover the world'/>
        <SearchBar/>
        <TopSearch/>
        <Heading title='Trending hashtags' showButton={true}/>
        <TrendingHashtags/>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  app : {
    backgroundColor: "#EFF2F6",
    flex:1
  },
  container : {
    // marginHorizontal: 32,
    marginTop: 64,
  },
})