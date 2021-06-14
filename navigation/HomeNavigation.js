import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import productOverView from '../screens/productOverView'
import ProductDetails from '../screens/ProductDetails'
import Cart from '../screens/Cart'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Home = createStackNavigator()

const HomeNavigation = ({ navigation }) => {
    return (
        <Home.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#7f0663',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            },
        }}>
            <Home.Screen name='All Products' component={productOverView} options={{
                headerRight: () => (
                    <View style={{ marginRight: 25 }}>
                        <FontAwesome name="shopping-cart" size={28} color="white"
                            onPress={() => navigation.navigate('Cart')} />
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons name="menu-outline" size={35} color="white"
                            onPress={() => navigation.openDrawer()} />
                    </View>
                )

            }} />
            <Home.Screen name='ProductDetails' component={ProductDetails}
                options={({ route }) => ({ title: route.params.title })}
            />
            <Home.Screen name='Cart' component={Cart} />
        </Home.Navigator>
    )
}
export default HomeNavigation

const styles = StyleSheet.create({})
