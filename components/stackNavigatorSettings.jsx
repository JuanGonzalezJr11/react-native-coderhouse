import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProfile from './myProfile'
import ImageSelector from './imageSelector'

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
        <Stack.Screen 
          name="ImageSelector"
          component={ImageSelector}
        />
    </Stack.Navigator>
  )
}

export default StackNavigatorSettings