import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const ProductInCart = ({ titel, quantity, sum, removeitem }) => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={{ fontSize: 18 }} >{quantity}</Text>
                <Text style={{ marginLeft: 10, width: '55%', fontSize: 18 }}>{titel}</Text>
                <Text style={{ width: '28%', marginLeft: 5, fontSize: 18 }}>{sum.toFixed(2)}</Text>
            </View>
            <View style={styles.trash}>
                <TouchableOpacity onPress={removeitem}>
                    <Entypo name="trash" size={24} color="red" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ProductInCart

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: 5,


    },
    trash: {
        marginRight: 10,
        width: '8%',
        alignItems: 'flex-end'
    }
})
