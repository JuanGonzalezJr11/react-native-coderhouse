import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { useFocusEffect } from '@react-navigation/native'
import { setBottomTabSelected } from '../features/shopSlice'
import { useDispatch } from 'react-redux'

const MyProfile = ({ navigation }) => {
  const userDefault = '../assets/userDefault.png'
  const dispatch = useDispatch()
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setBottomTabSelected("Mi perfil"))
    }, [])
  )
  const launchCamera = () => {
    navigation.navigate('ImageSelector')
  }
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require(userDefault)}
        style={styles.image}
        resizeMode='cover'
      />
      <Pressable style={styles.button} onPress={launchCamera}>
        <Text style={styles.textButton}>Editar foto de perfil</Text>
      </Pressable>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  button: {
    backgroundColor: colors.primary,
    width: "90%",
    padding: 15,
    borderRadius: 5
  },
  textButton: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "bold",
    textAlign: 'center'
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 125
  }
})