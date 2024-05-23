import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, showBackButton }) => {
  const { height, width } = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {showBackButton && (
        <Pressable onPress={() => navigation.goBack()} >
          <AntDesign name="left" size={24} color={colors.white} />        
        </Pressable>
      )}
      <Text style={width >= 360 ? styles.text : styles.textSm}>{title}</Text>
      {showBackButton && (
        <Text style={styles.textInvisible}>.</Text>
      )}
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
    marginBottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
    flexDirection: 'row'
  },
  textInvisible: {
    color: colors.secondary
  }
})