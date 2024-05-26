import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card} onPress={() => { }}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{cartItem.title} x{cartItem.quantity}</Text>
        <Text style={styles.textPrice}>${cartItem.price}</Text>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    borderColor: colors.primary,
    borderBottomWidth: 1,
    margin: 10
  },
  textContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textTitle: {
    fontSize: 16
  },
  textPrice: {
    fontSize: 16,
    fontWeight: "bold"
  }
})