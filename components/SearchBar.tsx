import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'

const SearchBar = () => {
  const [input , setInput] = useState('');
  const  handleInput = useCallback((text: string) => {
    setInput(text);
  }, [])

  console.log(input);
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input} placeholder='Search' value={input} onChangeText={handleInput}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container : {
    marginHorizontal: 32,
    borderWidth: 1,
    borderRadius: 8,
  },
  input : {
    marginLeft: 16,
  }
})