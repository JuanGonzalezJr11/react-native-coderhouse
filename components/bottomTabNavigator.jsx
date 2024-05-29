import { Pressable, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Header from "./header";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../constants/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import StackNavigator from "./stackNavigator";
import StackNavigatorCart from "./stackNavigatorCart";
import StackNavigatorOrder from "./stackNavigatorOrder";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        header: () => {
          return <Header navigation={navigation}/>;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Entypo
                  name="shop"
                  size={24}
                  color={focused ? colors.white : colors.primary}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={StackNavigatorCart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Entypo
                  name="shopping-cart"
                  size={24}
                  color={focused ? colors.white : colors.primary}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={StackNavigatorOrder}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="clipboard-list"
                  size={24}
                  color={focused ? colors.white : colors.primary}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    elevation: 4,
    height: 60,
  },
});
