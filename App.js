import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text, FlatList, TouchableOpacity, Modal } from "react-native";

const listExample = [
  { id: 1, value: "Snacks" },
  { id: 2, value: "Galletas" },
  { id: 3, value: "Congelados" },
]

const App = () => {
  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})
  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }
  const handleChangeText = (e) => setTextItem(e)
  const addItem = () => {
    setItemList((currentValue) => [
      ...currentValue,
      { id: Math.random().toString(), value: textItem },
    ])
    setTextItem("")
  }
  const handleDelete = () => {
    const filter = itemList.filter(i => i !== itemSelected)
    setItemList(filter)
    setModalVisible(false)
  }
  const handleCancel = () => {
    setModalVisible(false)
    setItemSelected({})
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={textItem}
        />
        <Button title="ADD" color={"#5555ff"} onPress={addItem} />
      </View>
      <View style={styles.taskContainer}>
        <FlatList
          style={styles.flatlist}
          data={itemList}
          keyExtractor={i => i.id.toString()}
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.card}
              onPress={handleModal(item)}
            >
              <Text style={styles.taskText}>{item.value}</Text>
            </TouchableOpacity>
          }
        />
      </View>
      <Modal 
        visible={modalVisible}
        animationType="slide"
        transparent={true}>
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTextContainer}>
                <Text>¿Estás seguro que deseas borrar?</Text>
              </View>
              <View style={style.modalTextContainer}>
                <Text style={styles.modalText}>{itemSelected.value}</Text>
              </View>
              <View style={styles.modalBtnContainer}>
                <Button title="Borrar" onPress={handleDelete}/>
                <Button title="Cancelar" onPress={handleCancel} />
              </View>
            </View>
          </View>
      </Modal>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: 250,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  taskContainer: {
    borderWidth: 1,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    width: "100%",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  taskText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  flatlist: {
    width: "90%",
  },
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
