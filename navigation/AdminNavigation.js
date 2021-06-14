import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Edit from '../screens/Edit';
import UserProductScreen from '../screens/UserProductScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const Admin = createStackNavigator()

const AdminNavigation = ({ navigation }) => {

    return (
        <Admin.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#7f0663',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                },
                headerLeft: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons name="menu-outline" size={35} color="white"
                            onPress={() => navigation.openDrawer()} />
                    </View>
                )
            }}>
            <Admin.Screen name='Admin Products' component={UserProductScreen}
                options={{
                    headerRight: () => (
                        <View style={{ marginRight: 25 }}>
                            <Ionicons name="add-sharp" size={35} color="white"
                                onPress={() => navigation.navigate({
                                    name: 'Edit',
                                    params: {
                                        theID: null
                                    }
                                })} />
                        </View>
                    ),

                }}
            />
            <Admin.Screen name='Edit' component={Edit} />

        </Admin.Navigator>
    )
}

export default AdminNavigation

