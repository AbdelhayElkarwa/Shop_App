import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native'

const OrderItem = ({ amount, date, item }) => {
    const [order, setOrder] = useState(false)
    console.log(item)
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.sumary}>
                    <Text style={styles.amount}> ${amount.toFixed(2)}</Text>
                    <Text style={styles.date}> {date}</Text>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 10, padding: 10 }}>
                    <Button title={order ? 'Hide Details' : 'Show Details'} onPress={() => setOrder(prevState => !prevState)} />
                </View>
                {order && (<FlatList data={item}
                    keyExtractor={item => item.productId}
                    renderItem={dataItem => (
                        <View style={styles.detail}>
                            <Text style={{ fontSize: 20 }}>{dataItem.item.quantity}</Text>
                            <Text style={{ fontSize: 20 }}>{dataItem.item.productTitle}</Text>
                            <Text style={{ fontSize: 20 }}>{dataItem.item.sum}</Text>
                        </View>
                    )}
                />)}
            </View>
        </ScrollView>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        margin: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
    },
    sumary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    },
    amount: {
        fontSize: 18
    },
    date: {
        fontSize: 18
    },
    detail: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,

    }
})
