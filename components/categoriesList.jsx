import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import categories from "../data/categories.json";
import { colors } from "../constants/colors";

const CategoriesList = ({ selectCategory = () => {} }) => {
//   const [categorySelected, setCategorySelected] = useState("");
//   const selectCategory = (category) => {
//     setCategorySelected(category);
//   };
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable
            style={styles.pressable}
            onPress={() => selectCategory(item)}
          >
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        )}
        style={styles.flatlist}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  flatlist: {
    width: "90%",
  },
  pressable: {
    alignItems: "center",
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.white,
    paddingHorizontal: 10,
  },
});
