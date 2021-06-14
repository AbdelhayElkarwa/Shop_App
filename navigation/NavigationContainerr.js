import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './DrawerNav';
const NavigationContainerr = () => {


    return (
        <NavigationContainer>

            <DrawerNav />


        </NavigationContainer>
    )
}

export default NavigationContainerr

const styles = StyleSheet.create({})
