import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ModalCustom from "./components/modalCustom/modalCustom";
import CategoriesInput from "./components/CategoriesInput/CategoriesInput";
import ItemList from "./components/ItemList/ItemList";
import Header from "./components/header";

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
      <Header title={"Categorias"}/>
      <CategoriesInput 
        textItem={textItem}
        addItem={addItem}
        handleChangeText={handleChangeText}
      />
      <ItemList
         itemList={itemList}
         handleModal={handleModal}
      />
      <ModalCustom
        modalVisible={modalVisible} 
        itemSelected={itemSelected}
        handleDelete={handleDelete}
        handleCancel={handleCancel}
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20
  }
})
