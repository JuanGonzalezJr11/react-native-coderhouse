import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const ModalCustom = ({modalVisible, itemSelected, handleDelete, handleCancel}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTextContainer}>
            <Text>¿Estás seguro que deseas borrar?</Text>
          </View>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalBtnContainer}>
            <Button title="Borrar" onPress={handleDelete} />
            <Button title="Cancelar" onPress={handleCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalCustom

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#cccccc88",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 7
  },
  modalTextContainer: {
  },
  modalBtnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  modalText: {
    fontWeight: "bold"
  }
})