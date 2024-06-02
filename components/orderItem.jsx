import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "../constants/colors";

const OrderItem = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);
  const showOrderDetails = () => {
    setShowDetails(!showDetails);
  };
  const onContentLayaout = (e) => {
    const { height } = e.nativeEvent.layout;
    setContentHeight(height);
  };
  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: showDetails ? contentHeight : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [showDetails]);
  return (
    <View style={styles.card}>
      <Pressable
        onPress={showOrderDetails}
        onBlur={() => setShowDetails(false)}
      >
        <View style={styles.textContainer}>
          <FontAwesome5
            name="clipboard-list"
            size={24}
            color={colors.secondary}
          />
          <Text style={styles.text}>{order.createdAt}</Text>
          <Text style={styles.textPrice}>${order.total}</Text>
        </View>
        <Animated.View
          style={[styles.itemDetailMainContainer, { height: animatedHeight }]}
        >
          <View style={styles.prueba} onLayout={onContentLayaout}>
            {order.items.map((item, index) => (
              <View key={index} style={styles.itemDetailContainer}>
                <Text style={styles.textItemDetail}>
                  {item.title} x{item.quantity}
                </Text>
                <Text style={styles.textPriceItemDetail}>${item.price}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderColor: colors.primary,
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 5,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
  textPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDetailMainContainer: {
    overflow: "hidden",
    alignItems: "center",
  },
  prueba: {
    width: "100%",
    alignItems: "center"
  },
  itemDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    margin: 2,
  },
  textItemDetail: {
    fontSize: 16
  },
  textPriceItemDetail: {
    fontSize: 16
  }
});
