import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ProductsList from './components/productsList'
import ItemDetail from './components/itemDetail'
import Header from './components/header'
import CategoriesList from './components/categoriesList'

const Stack = createNativeStackNavigator()
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='CategoriesList'
                screenOptions={
                    ({route}) => (
                        {
                            header: () => {
                                return <Header title={route.name === "CategoriesList" ? "Categorías"
                                : route.name === "ProductsList" ? route.params.item : "Detalles del producto" }/>
                            }
                        }
                    )
                }
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
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({

})