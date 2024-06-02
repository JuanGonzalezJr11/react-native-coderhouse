import { Pressable, StyleSheet, Text, View, Animated, Easing } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "../constants/colors";

const OrderItem = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const slideInterpolate = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const showOrderDetails = () => {
    setShowDetails(!showDetails);
  };
  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: showDetails ? 1 : 0,
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
        {showDetails && (
          <Animated.View
            style={[
              styles.itemDetailMainContainer,
              { transform: [{ translateY: slideInterpolate }] },
            ]}
          >
            {order.items.map((item, index) => (
              <View key={index} style={styles.itemDetailContainer}>
                <Text>
                  {item.title} x{item.quantity}
                </Text>
                <Text>${item.price}</Text>
              </View>
            ))}
          </Animated.View>
          //   <View style={styles.itemDetailMainContainer}>
          //     {order.items.map((item, index) => (
          //       <View key={index} style={styles.itemDetailContainer}>
          //         <Text>
          //           {item.title} x{item.quantity}
          //         </Text>
          //         <Text>${item.price}</Text>
          //       </View>
          //     ))}
          //   </View>
        )}
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
    alignItems: "center",
  },
  itemDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    margin: 2,
  },
});
