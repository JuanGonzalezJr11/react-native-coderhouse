import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'

const InputForm = ({
    label,
    onChange,
    error = "",
    isSecure = false
}) => {
    const [input, setInput] = useState("")
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput 
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? 
        <Text style={styles.error}>
            {error}
        </Text>
        : null
      }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({

})