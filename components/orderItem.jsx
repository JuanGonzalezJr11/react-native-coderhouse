import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '../constants/colors';

const OrderItem = ({ order }) => {
    const total = order.items.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{new Date(order.createdAt).toLocaleString()}</Text>
                <Text style={styles.textPrice}>${total}</Text>
                <FontAwesome5 name="clipboard-list" size={24} color={colors.black} />
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    card: {
        
    },
    textContainer: {

    },
    text: {

    },
    textPrice: {

    },
})