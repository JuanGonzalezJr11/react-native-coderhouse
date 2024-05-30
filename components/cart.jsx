import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { colors } from '../constants/colors'
import { setBottomTabSelected } from '../features/shopSlice'
import { useFocusEffect } from "@react-navigation/native";
import ModalConfirmOrder from "./modalConfirmOrder";
import { clearCartItem } from "../features/cartSlice";

const Cart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { items: cartData, total } = useSelector(
    (state) => state.cartReducer.value
  );
  const { user } = useSelector((state) => state.authReducer.value)
  const dispatch = useDispatch()
  const [triggerPostOrder, result] = usePostOrderMutation()
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setBottomTabSelected("Carrito"))
    }, [])
  )
  const onConfirmOrder = () => {
    setModalVisible(true)
  }
  const handleCancel = () => {
    setModalVisible(false)
  }
  const handleConfirm = async () => {
    try {
      await triggerPostOrder({ items: cartData, createdAt: new Date().toLocaleString(), user: user, total })
      dispatch(clearCartItem())
      setModalVisible(false)
      navigation.navigate('Orders')
    } catch (error) {
      console.error(error)
    }
  }
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
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonSecondary} onPress={() => navigation.goBack()}>
              <Text style={styles.textButtonSecondary}>Continuar comprando</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onConfirmOrder}>
              <Text style={styles.textButton}>Finalizar compra</Text>
            </Pressable>
          </View>
          <ModalConfirmOrder modalVisible={modalVisible} handleCancel={handleCancel} handleConfirm={handleConfirm}/>
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
    backgroundColor: colors.white,
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent:"space-between"
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginBottom: 20
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
  },
  buttonSecondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary,
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
  textButtonSecondary: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary
  }
});
