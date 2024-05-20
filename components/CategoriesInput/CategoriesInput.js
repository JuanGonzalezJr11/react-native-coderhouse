import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'


const CategoriesInput = ({textItem, addItem, handleChangeText}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={handleChangeText}
                value={textItem}
            />
            <Button title="ADD" color={"#5555ff"} onPress={addItem} />
        </View>
    )
}

export default CategoriesInput

const styles = StyleSheet.create({
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
})