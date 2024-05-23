import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from "../data/products.json"
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../constants/colors';

const ItemDetail = ({ route, navigation }) => {
    const [product, setProduct] = useState(null)
    const [orientation, setOrientation] = useState("portrait")
    const { width, height } = useWindowDimensions()
    const {itemIdSelected} = route.params
    useEffect(() => {
        if (width > height) setOrientation("landscape")
        else setOrientation("portrait")
    }, [width, height])
    useEffect(() => {
        const productSelected = allProducts.find((product) => product.id === itemIdSelected)
        setProduct(productSelected)
    }, [itemIdSelected])
    return (
        <View style={styles.mainContainer}>
            {/* <Pressable onPress={() => navigation.goBack()} >
                <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
            </Pressable> */}
            {product ?
                (
                <View style={orientation === "portrait" ? styles.container : styles.containerLandscape}>
                    <Image
                        resizeMode="cover"
                        style={orientation === "portrait" ? styles.image : styles.imageLandscape}
                        source={{ uri: product.image }}
                    />
                    <View style={orientation === "portrait" ? styles.detailContainer : styles.detailContainerLandscape}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.description}>{product.description}</Text>
                        <Text style={styles.price}>${product.price}</Text>
                        <Pressable style={styles.button}>
                            <Text style={styles.textButton}>Añadir al carrito</Text>
                        </Pressable>
                    </View>
                </View>)
                :
                null
            }
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: "column"
    },
    container: {
        width: "100%",
        alignItems: "center"
    },
    containerLandscape: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "flex-start",
        width: "100%"
    },
    image: {
        height: 250,
        width: "50%",
    },
    imageLandscape: {
        height: 200,
        width: "30%",
    },
    detailContainer: {
        width: "100%"
    },
    detailContainerLandscape: {
        width: "70%"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5
    },
    description: {
        fontSize: 16,
        marginBottom: 10
    },
    price: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "right"
    },
    button: {
        backgroundColor: colors.success,
        borderRadius: 6,
        alignItems: "center",
        padding: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white
    }
})