import { StyleSheet, TextInput, View } from 'react-native';
import React, { useCallback, useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const handleInput = useCallback((text: string) => {
    setInput(text);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#D3D3D3" 
        value={input}
        onChangeText={handleInput}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: '#D3D3D3', 
  },
  input: {
    marginLeft: 16,
  },
});
