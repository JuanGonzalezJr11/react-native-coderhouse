import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import cartData from '../data/cart.json'
import CartItem from './cartItem'

const Cart = () => {
  const total = cartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
  return (
    <View style={styles.container}>
      <FlatList 
        data={cartData}
        keyExtractor={c => c.id}
        renderItem={({item}) => {
          return (
            <CartItem cartItem={item}/>
          )
        }}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.textPrice}>${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {

  },
  totalContainer: {

  },
  textPrice: {

  }
})