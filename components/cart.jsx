import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
// import cartData from '../data/cart.json'
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { colors } from '../constants/colors'

const Cart = () => {
  const { items: cartData, total } = useSelector(
    (state) => state.cartReducer.value
  );
  const [triggerPostOrder, result] = usePostOrderMutation()
  const onConfirmOrder = () => {
    triggerPostOrder({ items: cartData, user: 'Juan Gonzalez', total })
  }
  // const total = cartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
  return (
    <View style={styles.mainContainer}>
      {Array.isArray(cartData) && cartData.length > 0 ? (
        <View style={styles.container}>
          <View>
            <FlatList
              data={cartData}
              keyExtractor={(c) => c.id}
              renderItem={({ item }) => {
                return <CartItem cartItem={item} />;
              }}
              showsVerticalScrollIndicator={false}
            />
            <Text style={styles.textPrice}>${total}</Text>
          </View>
          <View style={styles.totalContainer}>
            <Pressable style={styles.button} onPress={onConfirmOrder}>
              <Text style={styles.textButton}>Finalizar compra</Text>
            </Pressable>
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
  mainContainer: {
    flex: 1,
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent:"space-between"
  },
  totalContainer: {
    marginHorizontal: 15
  },
  textPrice: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginHorizontal: 10,
    marginTop: 5
  },
  containerCartEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCartEmpty: {
    fontSize: 16,
    marginTop: 10
  },
  button: {
    backgroundColor: colors.success,
    borderRadius: 6,
    alignItems: "center",
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 10
  },
  textButton: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.white
  }
});
