import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { addNewProduct, updatedProdact } from '../redux/homeAction';


const Edit = ({ route, navigation }) => {

    const id = route.params.theID
    const dispatch = useDispatch()

    const editingProduct = useSelector(state => state.products.userProduct.find(pro => pro.id === id))
    const [title, settitle] = useState(editingProduct ? editingProduct.title : '')
    const [imageUrl, setimageUrl] = useState(editingProduct ? editingProduct.imageUrl : '')
    const [price, setprice] = useState(editingProduct ? editingProduct.price : '')
    const [description, setdescription] = useState(editingProduct ? editingProduct.description : '')

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.text}>Title</Text>
                    <TextInput style={styles.input} value={title} onChangeText={(val) => settitle(val)} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.text}>imageUrl</Text>
                    <TextInput style={styles.input} value={imageUrl} onChangeText={(val) => setimageUrl(val)} />
                </View>
            </View>
            { editingProduct ? null : <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.text}>price</Text>
                    <TextInput style={styles.input} value={price} onChangeText={(val) => setprice(val)} />
                </View>
            </View>}
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.text}>description</Text>
                    <TextInput style={styles.input} value={description} onChangeText={(val) => setdescription(val)} />
                </View>
            </View>
            <View style={styles.button}>
                {
                    editingProduct ? <Button color='#7f0663' title='Edit'
                        onPress={() => dispatch(updatedProdact(id, title, imageUrl, description, price),
                            navigation.navigate({
                                name: 'Admin Products',
                            })
                        )} /> :
                        <Button color='#7f0663' title='Add' onPress={() => dispatch(addNewProduct(title, imageUrl, price, description),
                            navigation.navigate({
                                name: 'Admin Products',
                            })
                        )} />
                }

            </View>

        </ScrollView>
    )
}

export default Edit

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    form: {
        width: '100%'
    },
    text: {
        marginVertical: 2,
        fontSize: 20,
        fontWeight: '500'
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    button: {
        width: '30%',
        justifyContent: 'center',
        marginLeft: '35%',
        height: 40,
        marginTop: 15,

    }
})
