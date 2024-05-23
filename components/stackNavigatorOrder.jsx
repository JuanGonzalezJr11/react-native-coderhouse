import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Order from './order'

const Stack = createNativeStackNavigator()
const StackNavigatorOrder = () => {
  return (
    <Stack.Navigator
        initialRouteName="Order"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Order"
            component={Order}
        />
    </Stack.Navigator>
  )
}

export default StackNavigatorOrder