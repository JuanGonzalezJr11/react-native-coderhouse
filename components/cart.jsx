import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
// import cartData from '../data/cart.json'
import CartItem from "./cartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items: cartData, total } = useSelector(
    (state) => state.cartReducer.value
  );
  // const total = cartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
  return (
    <View style={styles.container}>
      {Array.isArray(cartData) && cartData.length > 0 ? (
        <View>
          <FlatList
            data={cartData}
            keyExtractor={(c) => c.id}
            renderItem={({ item }) => {
              return <CartItem cartItem={item} />;
            }}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.textPrice}>${total}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.containerCartEmpty}>
          <Text style={styles.textCartEmpty}>Aún no se han añadido productos al carrito...</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  totalContainer: {
    marginHorizontal: 15,
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  containerCartEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCartEmpty: {
    fontSize: 16,
    marginTop: 10
  }
});
