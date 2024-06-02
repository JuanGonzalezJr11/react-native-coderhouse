import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from '../constants/colors'
import Counter from '../components/counter'

const ModalDeleteItem = ({ modalVisible, item, quantity, handleDelete, handleCancel }) => {
    return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.textBold}>
            ¿Está seguro que desea eliminar {item}?
          </Text>
          {Number(quantity) > 1 && (
            <View>
              <Text style={styles.text}>Cantidad:</Text>
              <Counter maxQuantity={quantity}/>
            </View>
          )}
          <View style={styles.buttonsContainer}>
            <Pressable onPress={handleDelete} style={styles.presseableDelete}>
              <Text style={styles.textButtonDelete}>Eliminar</Text>
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

export default ModalDeleteItem;

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
        borderColor: colors.error,
        padding: 20,
        gap: 30
      },
      textBold: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
      },
      text: {
        fontSize: 18,
        textAlign: "center"
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
      presseableDelete: {
        backgroundColor: colors.error,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.error,
        width: "90%",
        padding: 15,
        alignItems: "center"
      },
      textButtonDelete: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white,
      }
});
