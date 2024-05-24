import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors.js'
import { useDispatch } from 'react-redux'
import { setIdSelected } from '../features/shopSlice.js'

const ProductItem = ({ product, navigation }) => {
    const dispatch = useDispatch()
    const handleNavigate = () => {
        dispatch(setIdSelected(product.title))
        navigation.navigate('ItemDetail', { itemIdSelected: product.id })
    }
    return (
        <View style={styles.card}>
            <Pressable style={styles.pressable} onPress={handleNavigate}>
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