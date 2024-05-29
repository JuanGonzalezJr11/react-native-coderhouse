import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "./orderItem";
import { useGetOrderByUserQuery } from "../services/shopService";
import { useDispatch, useSelector } from "react-redux";
import {
  setBottomTabSelected,
  setCategorySelected,
} from "../features/shopSlice";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../constants/colors";

const Order = () => {
  const { user } = useSelector((state) => state.authReducer.value);
  const { data } = useGetOrderByUserQuery(user);
  const bottomTabSelected = useSelector(
    (state) => state.shopReducer.value.bottomTabSelected
  );
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setBottomTabSelected("Ordenes"));
    }, [])
  );
  return (
    <View style={styles.container}>
      {Array.isArray(data) && data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <OrderItem order={item} />;
          }}
        />
      ) : (
        <View style={styles.containerOrdersEmpty}>
          <Text style={styles.textOrdersEmpty}>
            Aún no se ha realizado ninguna compra...
          </Text>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 10
  },
  containerOrdersEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textOrdersEmpty: {
    fontSize: 16,
    marginTop: 10,
  }
});
