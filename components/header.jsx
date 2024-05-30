import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { HeaderBackButton } from "@react-navigation/elements";

const Header = ({ navigation }) => {
  const bottomTabSelected = useSelector(
    (state) => state.shopReducer.value.bottomTabSelected
  );
  const categorySelected = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {bottomTabSelected ==="Categorias" && categorySelected !== "" && (
        <Pressable onPress={() => navigation.goBack()} style={styles.pressable}>
          <AntDesign name="left" size={24} color={colors.white} />
        </Pressable>
      )}
      <Text style={width >= 360 ? styles.text : styles.textSm}>
        {bottomTabSelected === "Categorias" && categorySelected !== ""
          ? categorySelected
          : bottomTabSelected}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.secondary,
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  pressable: {
    position: "absolute",
    left: 16
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  textSm: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
  },
});
