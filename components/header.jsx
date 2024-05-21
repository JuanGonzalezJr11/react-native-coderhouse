import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  const {height, width} = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text style={width >= 360 ? styles.text : styles.textSm}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white
    },
    textSm: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.white
    },
    container: {
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
        width: "100%",
        height: 70
    }
})