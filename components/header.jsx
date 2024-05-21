import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({ title, navigation }) => {
  const { height, width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      {/* <Pressable onPress={() => navigation.goBack()} >
        <Ionicons name="arrow-back-circle-outline" size={36} color={colors.white} />
      </Pressable> */}
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