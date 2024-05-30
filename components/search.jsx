import { Pressable, StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome name="search" size={24} color={colors.primary} />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 10,
    width: "100%"
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    width: "70%",
    padding: 5
  },
});
