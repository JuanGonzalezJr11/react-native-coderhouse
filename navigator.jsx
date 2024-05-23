import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './components/bottomTabNavigator'

const Stack = createNativeStackNavigator()
const Navigator = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
            {/* <Stack.Navigator
                initialRouteName='CategoriesList'
                screenOptions={
                    ({ route }) => (
                        {
                            header: () => {
                                const isCategoriesList = route.name === "CategoriesList";
                                const title = isCategoriesList ? "Categorías" 
                                : route.name === "ProductList" ? route.name.item : "Detalles del producto"
                                return <Header title={title} showBackButton={!isCategoriesList}/>
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
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({

})