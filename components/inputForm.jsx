import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'

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
      <TextInput 
        style={error ? styles.inputError : styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        placeholder={label}
      />
      {error ? 
        <Text style={styles.textError}>
            {error}
        </Text>
        : null
      }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "90%"
  },
  subtitle: {
    
  },
  input: {
    fontSize: 18,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    margin: 5,
    padding: 10,
    color: colors.black,
    width: "100%"
  },
  inputError: {
    fontSize: 18,
    borderColor: colors.error,
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    margin: 5,
    padding: 10,
    color: colors.black,
    width: "100%"
  },
  textError: {
    color: colors.error,
    fontSize: 12,
    fontWeight: 'bold'
  }
})