import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './login'
import Signup from './signup'

const Stack = createNativeStackNavigator()
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            component={Login}
            name='Login'
        />
        <Stack.Screen
            component={Signup}
            name='Signup'
        />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({

})