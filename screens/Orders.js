import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'

const Orders = () => {
    const order = useSelector(state => state.order.order)
    console.log('from ordeeeeeeeeeeer', order)
    return (
        <View>
            <View style={{ marginTop: '15%', alignItems: 'center' }}>
                <Text style={styles.text}>Orders</Text></View>

            <FlatList
                data={order}
                keyExtractor={(item) => item.id}
                renderItem={itemData => <OrderItem amount={itemData.item.amount} date={itemData.item.date} item={itemData.item.items} />} />
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({
    text: {
        textDecorationStyle: 'dashed',
        textDecorationLine: 'underline',
        fontSize: 22,
        fontWeight: 'bold',
        alignContent: 'center',

    }
})
