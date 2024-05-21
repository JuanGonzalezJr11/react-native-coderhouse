import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors.js'

const ProductItem = ({ product, navigation, route }) => {
    return (
        <View style={styles.card}>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('ItemDetail', { itemIdSelected: product.id })}>
                <Text style={styles.text}>{product.title}</Text>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={{ uri: product.image }}
                />
            </Pressable>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.primary,
        width: "100%",
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.white,
        paddingHorizontal: 10
    },
    image: {
        height: 120,
        width: "30%",
        marginHorizontal: 10
    },
    pressable: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})