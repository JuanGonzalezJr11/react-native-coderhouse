import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesList from './categoriesList'
import ProductsList from './productsList'
import ItemDetail from './itemDetail'

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='CategoriesList'
        screenOptions={{
            headerShown: false
        }}
        // screenOptions={
        //     ({ route }) => (
        //         {
        //             header: () => {
        //                 const isCategoriesList = route.name === "CategoriesList";
        //                 const title = isCategoriesList ? "Categorías" 
        //                 : route.name === "ProductList" ? route.name.item : "Detalles del producto"
        //                 return <Header title={title} showBackButton={!isCategoriesList}/>
        //             }
        //         }
        //     )
        // }
    >
        <Stack.Screen
            component={CategoriesList}
            name='CategoriesList'
        />
        <Stack.Screen
            component={ProductsList}
            name='ProductsList'
        />
        <Stack.Screen
            component={ItemDetail}
            name='ItemDetail'
        />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({

})