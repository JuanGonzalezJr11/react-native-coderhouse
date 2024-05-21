import { Pressable, StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants/colors";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={keyword}
          onChangeText={setKeyword}
        />
        <Pressable onPress={() => onSearch(keyword)}>
          <FontAwesome name="search" size={24} color={colors.black} />
        </Pressable>
        {/* <Pressable onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color={colors.black} />
        </Pressable> */}
      </View>
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
    marginBottom: 20,
    width: "100%",
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    width: "70%",
  },
});
