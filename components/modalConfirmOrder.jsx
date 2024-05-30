import { StyleSheet, Text, View, Modal, Button, Pressable } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const ModalConfirmOrder = ({ modalVisible, handleConfirm, handleCancel }) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Está apunto de realizar la compra ¿Desea continuar?
          </Text>
          <View style={styles.buttonsContainer}>
            <Pressable onPress={handleConfirm} style={styles.presseableConfirm}>
              <Text style={styles.textButtonConfirm}>Confirmar</Text>
            </Pressable>
            <Pressable onPress={handleCancel} style={styles.presseableCancel}>
              <Text style={styles.textButtonCancel}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmOrder;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#cccccc88",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: colors.white,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.secondary,
    padding: 20,
    gap: 30
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  buttonsContainer: {
    width: "100%",
    gap: 10,
    alignItems: "center"
  },
  presseableCancel: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.gray,
    width: "90%",
    padding: 15,
    alignItems: "center"
  },
  textButtonCancel: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray,
  },
  presseableConfirm: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.secondary,
    width: "90%",
    padding: 15,
    alignItems: "center"
  },
  textButtonConfirm: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
});
