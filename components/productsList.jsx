import { StyleSheet, FlatList, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import products from "../data/products.json";
import ProductItem from "./productItem";
import Search from "./search";
import { colors } from "../constants/colors";

const ProductsList = ({
  categorySelected = "",
  setCategorySelected = () => { },
  setItemIdSelected = () => { }
}) => {
  const [keyword, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");
  // El "useEffect" tiene 3 formas de ejecutarse, cuando tiene "[]" hace que se ejecute una sola vez cuando carga el componente, cuando tiene "[nombredevariable]" que indica que cada vez que inicia o esa variable sufra un cambio se ejecutara ese useEffect, o bien sin nada, que hace que se ejecute el useEffect cada vez que cualquiera de las variables cambie.
  useEffect(() => {
    regex = /\d/;
    const hasDigits = regex.test(keyword);
    if (hasDigits) {
      setError("No debe usar números para su búsqueda.");
      return;
    }
    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    );
    const productsFilter = productsPreFiltered.filter((product) =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setProductsFiltered(productsFilter);
    setError("");
  }, [keyword, categorySelected]);
  return (
    <View style={styles.container}>
      <Search
        onSearch={setKeyword}
        error={error}
        goBack={() => setCategorySelected("")}
      />
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={productsFiltered}
          renderItem={({ item }) => <ProductItem product={item} setItemIdSelected={setItemIdSelected} />}
          keyExtractor={(p) => p.id}
          style={styles.flatlist}
        />
      )}
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  flatlist: {
    width: "90%",
  },
  error: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.error,
  },
});
