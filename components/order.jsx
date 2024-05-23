import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dataOrder from '../data/order.json'
import OrderItem from './orderItem'

const Order = () => {
  return (
    <View>
      <FlatList
        data={dataOrder}
        keyExtractor={o => o.id}
        renderItem={({item}) => {
          return (
            <OrderItem 
              order={item}
            />
          )
        }}
      />
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
    
})