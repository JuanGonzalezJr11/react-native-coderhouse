import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import { colors } from '../constants/colors.js'
const ItemList = ({ handleModal }) => {
    return (
        <View style={styles.taskContainer}>
            <FlatList
                style={styles.flatlist}
                // data={itemList}
                data={categories}
                //keyExtractor={i => i.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => handleModal(item)}
                    >
                        <Text style={styles.taskText}>{item}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        width: "100%",
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    taskText: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.white
    },
    flatlist: {
        width: "90%",
    },
})