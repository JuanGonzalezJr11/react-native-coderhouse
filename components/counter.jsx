import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  assignValue,
  decrement,
  increment,
} from "../features/counter/counterSlice";
import { colors } from "../constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const Counter = ({ maxQuantity }) => {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState(0);
  useEffect(() => {
    setTextInput(count);
  }, [count]);
  const add = () => {
    dispatch(increment(textInput));
    setTextInput(textInput);
  };
  const subtract = () => {
    dispatch(decrement(textInput));
    setTextInput(textInput);
  };
  const forKeyboard = (text) => {
    dispatch(assignValue(text));
    setTextInput(text);
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={
          textInput !== "0" && Number(textInput)
            ? styles.button
            : styles.buttonDisabled
        }
        onPress={subtract}
        disabled={textInput !== "0" && Number(textInput) !== 0 ? false : true}
      >
        <AntDesign name="minus" size={25} color={colors.white} />
      </Pressable>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => forKeyboard(text)}
        value={textInput}
      />
      <Pressable
        style={
          textInput === maxQuantity ? styles.buttonDisabled : styles.button
        }
        onPress={add}
        disabled={textInput === maxQuantity ? true : false}
      >
        <AntDesign name="plus" size={25} color={colors.white} />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 5,
  },
  textInput: {
    width: "20%",
    fontSize: 18,
    textAlign: "center",
  },
  buttonDisabled: {
    backgroundColor: colors.gray,
    padding: 5,
  },
});
