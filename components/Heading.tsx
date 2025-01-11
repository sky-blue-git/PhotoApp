import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation_components/stacktype';

interface headingProps {
  title: string,
  navigateTo?: keyof RootStackParamList,
}

const Heading = ({title, navigateTo} : headingProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  const handlePress = useCallback(() => {
    if (navigateTo) { 
      navigation.navigate(navigateTo);
    }
  }, [navigateTo, navigation]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {title}
      </Text>
      { navigateTo ? (
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.buttonText}>
            See all
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
  container : {
    paddingRight: 16,
    paddingLeft: 32,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  heading : {
    color: "#61758e",
    fontSize: 28,
    fontWeight: "bold",
  },
  buttonText : {
    color: "#61758e",
    fontSize: 16,
  }
})
