import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { colors } from "../constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../features/cartSlice";
import ModalDeleteItem from "./modalDeleteItem";
import { reset } from "../features/counter/counterSlice";

const CartItem = ({ cartItem, setModalDeleteVisible }) => {
  const quantitySelected = useSelector((state) => state.counterReducer.value)
  const [options, setOptions] = useState({
    coordinates: false,
    showOptions: false,
  });
  const dispatch = useDispatch();
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const visibleOption = () => {
    setOptions({ coordinates: !options.coordinates, showOptions: true });
  };
  const slideInterpolate = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });
  const showModalDelete = () => {
    setModalVisible(true);
  };
  const handleDelete = () => {
    const itemRemove = {...cartItem, quantity: quantitySelected}
    dispatch(removeCartItem(itemRemove));
    setModalVisible(false);
    setOptions({...options, showOptions: false})
    dispatch(reset())
  };
  const handleCancel = () => {
    setModalVisible(false);
    setOptions({...options, showOptions: false})
  };
  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: options.coordinates ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [options.coordinates]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.card} onPress={() => {}}>
        <View style={styles.container}>
          <Pressable
            style={styles.textPressable}
            onPress={visibleOption}
            onBlur={() => setOptions({...options, coordinates: false})}
          >
            <Text style={styles.textTitle}>
              {cartItem.title} x{cartItem.quantity}
            </Text>
            <Text style={styles.textPrice}>${cartItem.price}</Text>
          </Pressable>
        </View>
      </View>
      <Animated.View
        style={[
          styles.optionsContainer,
          { transform: [{ translateX: slideInterpolate }] },
        ]}
      >
        {options.showOptions && (
          <Pressable style={styles.deleteButton} onPress={showModalDelete}>
            <AntDesign name="delete" size={28} color={colors.white} />
          </Pressable>
        )}
      </Animated.View>
      <ModalDeleteItem
        modalVisible={modalVisible}
        item={cartItem.title}
        quantity={cartItem.quantity}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  card: {
    borderColor: colors.primary,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    padding: 10,
    width: "100%",
    flexDirection: "column",
  },
  textPressable: {
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  textTitle: {
    fontSize: 16,
  },
  textPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionsContainer: {
    position: "absolute",
    right: 0,
    backgroundColor: colors.white,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1,
  },
  deleteButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.error,
  },
});
