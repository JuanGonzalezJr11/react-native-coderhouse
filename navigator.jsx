import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './components/bottomTabNavigator'
import AuthStackNavigator from './components/authStack'
import { useSelector } from 'react-redux'
import ErrorScreen from './components/errorScreen'

const Stack = createNativeStackNavigator()
const Navigator = () => {
    const { user } = useSelector(state => state.authReducer.value)
    return (
        <NavigationContainer>
            {/* {user ? <BottomTabNavigator /> : <AuthStackNavigator />} */}
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({

})