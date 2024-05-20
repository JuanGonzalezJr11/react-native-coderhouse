import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
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
    container: {
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
        width: "100%",
        height: 70
    }
})