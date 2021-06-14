import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';

const Auth = createStackNavigator()
export default function AuthNavigation() {

    return (
        <Auth.Navigator>
            <Auth.Screen name='Signup' component={Signup} />
            <Auth.Screen name='Signin' component={Signin} />
        </Auth.Navigator>
    )
}



const styles = StyleSheet.create({})
