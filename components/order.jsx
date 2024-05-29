import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "./orderItem";
import { useGetOrderByUserQuery } from "../services/shopService";
import { useDispatch, useSelector } from "react-redux";
import { setBottomTabSelected, setCategorySelected } from "../features/shopSlice";
import { useFocusEffect } from "@react-navigation/native";

const Order = () => {
  const { user } = useSelector((state) => state.authReducer.value);
  const { data } = useGetOrderByUserQuery(user);
  const bottomTabSelected = useSelector(state => state.shopReducer.value.bottomTabSelected)
  const dispatch = useDispatch()
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setBottomTabSelected("Ordenes"))
      // dispatch(setCategorySelected(""))
    }, [])
  )
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
