import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native-web'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counterReducer.value)
    const dispatch = useDispatch()
    const [inputToAdd, setInputToAdd] = useState(null)
    // let count = 0
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder="Cantidad a aumentar"
                    style={styles.textInput}
                    onChangeText={setInputToAdd}
                    value={inputToAdd}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(incrementByAmount(Number(inputToAdd)))}
                >
                    <Text style={styles.buttonText}>Añadir</Text>
                </Pressable>
            </View>
            <Pressable 
                style={styles.button}
                onPress={() => dispatch(reset())}
            >
                <Text style={styles.buttonText}>Restear</Text>
            </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({

})