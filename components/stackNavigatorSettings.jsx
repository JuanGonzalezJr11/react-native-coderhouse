import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProfile from './myProfile'

const Stack = createNativeStackNavigator()
const StackNavigatorSettings = () => {
  return (
    <Stack.Navigator
        initialRouteName="MyProfile"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="MyProfile"
            component={MyProfile}
        />
    </Stack.Navigator>
  )
}

export default StackNavigatorSettings