import { useState } from "react"
import { View, StyleSheet, Platform, StatusBar } from "react-native"
import Navigator from "./navigator"
import { Provider } from "react-redux"
import store from "./store"

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})
  const handleDelete = () => {
    const filter = itemList.filter(i => i !== itemSelected)
    setItemList(filter)
    setModalVisible(false)
  }
  const handleCancel = () => {
    setModalVisible(false)
    setItemSelected({})
  }
  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    flex: 1
  }
})
