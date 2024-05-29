import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from './cart'
import { useDispatch } from 'react-redux'
import { setBottomTabSelected, setCategorySelected } from '../features/shopSlice'

const Stack = createNativeStackNavigator()
const StackNavigatorCart = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setBottomTabSelected("Carrito"))
    dispatch(setCategorySelected(""))
  })
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