import { Button, TextInput, View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title="ADD" color={"#5555ff"}/>
      </View>
      <View style={styles.taskContainer}>
        <View style={styles.card}>
          <Text style={styles.taskText}>Item 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.taskText}>Item 2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.taskText}>Item 3</Text>
        </View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: "center",
    flex: 1
  },
  input: {
    borderBottomWidth: 1, 
    borderBottomColor: "black", 
    width: 250,
    fontSize: 16
  },
  inputContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    paddingHorizontal: 20
  },
  taskContainer: {
    borderWidth: 1,
    marginTop: 20,
    alignItems: "center",
    width: "90%",
    paddingVertical: 10
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    width: "90%",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 5
  },
  taskText: {
    fontWeight: "bold",
    fontSize: 16
  }
})