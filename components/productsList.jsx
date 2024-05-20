import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import products from '../data/products.json'
import ProductItem from './productItem'

const ProductsList = () => {
    console.log(products)
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductItem product={item}/>}
        keyExtractor={p => p.id}
        style={styles.flatlist}
      />
    </View>
  )
}

export default ProductsList

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: "100%",
        paddingVertical: 10,
        alignItems: "center"
    },
    flatlist: {
        width: "90%"
    }
})