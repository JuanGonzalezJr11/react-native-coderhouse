import { StyleSheet, Text, View, FlatList, Pressable } from "react-native"
import React, { useEffect } from "react"
// import categories from "../data/categories.json"
import { colors } from "../constants/colors"
import { useDispatch, useSelector } from "react-redux"
import { setCategorySelected, setBottomTabSelected } from "../features/shopSlice"
import { useGetCategoriesQuery } from "../services/shopService"
import { useFocusEffect } from "@react-navigation/native"

const CategoriesList = ({ navigation }) => {
  const bottomTabSelected = useSelector(state => state.shopReducer.value.bottomTabSelected)
  const {data: categories, error, isLoading} = useGetCategoriesQuery()
  const dispatch = useDispatch()
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setBottomTabSelected("Categorias"))
    }, [])
  )
  // useEffect(() => {
  //   dispatch(setBottomTabSelected("Categorias"))
  // }, [bottomTabSelected])
  const handleNavigate = (item) => {
    dispatch(setCategorySelected(item))
    navigation.navigate("ProductsList", { item })
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable
            style={styles.pressable}
            onPress={() => handleNavigate(item) }
          >
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        )}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
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
    flex: 1,
    flexDirection: "column"
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
