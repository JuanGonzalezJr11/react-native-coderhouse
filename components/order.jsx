import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import OrderItem from "./orderItem";
import { useGetOrderByUserQuery } from "../services/shopService";
import { useSelector } from "react-redux";

const Order = () => {
  const { user } = useSelector((state) => state.authReducer.value);
  const { data } = useGetOrderByUserQuery(user);
  return (
    <View>
      <FlatList
        data={data}
        // data={dataOrder}
        // keyExtractor={(o) => o.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
