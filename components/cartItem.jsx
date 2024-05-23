import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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

  },
  textContainer: {

  },
  textTitle: {

  },
  textPrice: {

  }
})