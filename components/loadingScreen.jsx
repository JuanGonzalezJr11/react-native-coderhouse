import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.secondary} />
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})