import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../constants/colors'

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        fontSize: 16,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        padding: 10,
        margin: 10
    },
    text: {
      color: colors.white,
      fontSize: 16,
      fontWeight: "bold"
    }
})