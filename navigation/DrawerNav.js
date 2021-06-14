import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation';
import Orders from '../screens/Orders'
import UserProductScreen from '../screens/UserProductScreen';
import { Ionicons } from '@expo/vector-icons';
import AdminNavigation from './AdminNavigation';


const Drawer = createDrawerNavigator()
const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName='HomeNavigation'>
            <Drawer.Screen name='Products' component={HomeNavigation} />
            <Drawer.Screen name='Orders' component={Orders} />
            <Drawer.Screen name='Admin' component={AdminNavigation} />

        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
