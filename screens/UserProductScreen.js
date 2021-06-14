import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../redux/homeAction';
import AdminProduct from './AdminProduct';


const UserProductScreen = ({ navigation }) => {
    const userProductt = useSelector(state => state.products.userProduct)
    const dispatch = useDispatch()

    const deleteHandler = (id) => {
        Alert.alert('are yoy sure!!!', 'do you realy want to delete this product?', [
            { text: 'No', style: 'default' },
            {
                text: 'Yes', style: 'destructive',
                onPress: () => { dispatch(removeItem(id)) }
            }
        ]
        )
    }
    console.log('userproduct', userProductt)
    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={userProductt}
                keyExtractor={item => item.id}
                renderItem={dataItem => <AdminProduct price={dataItem.item.price} title={dataItem.item.title}
                    image={dataItem.item.imageUrl} pressoEdit={() => {
                        navigation.navigate({
                            name: 'Edit',
                            params: {
                                theID: dataItem.item.id
                            }
                        })
                    }}
                    pressOnDelete={() => {
                        deleteHandler(dataItem.item.id)
                    }} />}
            />
        </View>
    )
}

export default UserProductScreen

const styles = StyleSheet.create({})
