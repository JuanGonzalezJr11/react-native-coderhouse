import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '../constants/colors';

const OrderItem = ({ order }) => {
    // const total = order.items.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <FontAwesome5 name="clipboard-list" size={24} color={colors.black} />
                <Text style={styles.text}>{order.createdAt}</Text>
                <Text style={styles.textPrice}>${order.total}</Text>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: 1,
        borderColor: colors.primary,
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 5
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16
    },
    textPrice: {
        fontSize: 16,
        fontWeight: "bold"
    },
})