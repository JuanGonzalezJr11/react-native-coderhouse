import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors.js'

const ProductItem = ({ product }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{product.title}</Text>
            <Image
                resizeMode='cover'
                style={styles.image}
                source={{ uri: product.thumbnail }}
            />
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    card: {
        alignItems: "stretch",
        backgroundColor: colors.primary,
        width: "100%",
        paddingVertical: 15,
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
        paddingHorizontal: 10
    }
})