import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>Ooops...</Text>
      <Text style={styles.text}>
        Ocurrió un error... hay algo mal que no está bien...
      </Text>
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10
  },
  textSize: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.secondary
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
    textAlign: "center"
  }
});
