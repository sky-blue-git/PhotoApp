import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface headingProps {
  title: string,
  showButton?: boolean,
}

const Heading = ({title, showButton=false} : headingProps) => {
  return (
    <View style = {styles.container}>
      <Text style={styles.heading}>
        {title}
      </Text>
      {showButton ? (
        <TouchableOpacity>
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
    marginBottom: 8,
  },
  heading : {
    color: "#61758e",
    fontSize: 28,
    fontWeight: "bold",
  },
  buttonText : {
    color: "#61758e",
    fontSize: 16,
    // marginRight: -19,
  }
})