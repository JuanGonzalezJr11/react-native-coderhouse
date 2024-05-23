import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from './cart'

const Stack = createNativeStackNavigator()
const StackNavigatorCart = () => {
  return (
    <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Cart"
            component={Cart}
        />
    </Stack.Navigator>
  )
}

export default StackNavigatorCart