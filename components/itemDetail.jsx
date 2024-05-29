import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants/colors";
import { useGetProductByIdQuery } from "../services/shopService";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cartSlice";
import { useFocusEffect } from "@react-navigation/native";
import { setBottomTabSelected } from "../features/shopSlice";

const ItemDetail = ({ route, navigation }) => {
  // const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();
  const { itemIdSelected } = route.params;
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(itemIdSelected);
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setBottomTabSelected("Categorias"));
    }, [])
  );
  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);
  const handleAddCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
    if (Platform.OS === "android") {
      ToastAndroid.showWithGravity(
        `El producto ${product.title} x${product.quantity} se ha añadido al carrito.`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    } else {
      Alert.alert(
        `El producto ${product.title} x${product.quantity} se ha añadido al carrito.`
      );
    }
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.mainContainer}>
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.container
              : styles.containerLandscape
          }
        >
          <Image
            resizeMode="cover"
            style={
              orientation === "portrait" 
              ? styles.image 
              : styles.imageLandscape
            }
            source={{ uri: product.image }}
          />
          <View
            style={
              orientation === "portrait"
                ? styles.detailContainer
                : styles.detailContainerLandscape
            }
          >
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Pressable style={styles.button} onPress={handleAddCart}>
              <Text style={styles.textButton}>Añadir al carrito</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: "100%",
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "column",
  },
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    flex: 1,
  },
  containerLandscape: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    height: 250,
    width: "50%",
  },
  imageLandscape: {
    height: 200,
    width: "30%",
  },
  detailContainer: {
    width: "100%",
  },
  detailContainerLandscape: {
    width: "70%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "right",
  },
  button: {
    backgroundColor: colors.success,
    borderRadius: 6,
    alignItems: "center",
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
});
