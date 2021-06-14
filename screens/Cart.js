import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartAction'
import { addToOrder } from '../redux/OrderAction'
import ProductInCart from './ProductInCart'

const Cart = () => {

    const totalQuant = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch()
    //to transform object to array to use it in flatList and disaple button
    const cartItems = useSelector(state => {
        const transformedCard = []
        for (const key in state.cart.items) {
            transformedCard.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum

            })
        }
        return transformedCard.sort((a, b) => a.productId > b.productId ? 1 : -1)
    }
    )
    return (
        <View style={styles.screeen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}> {Math.round(totalQuant.toFixed(2) * 100) / 100}</Text>
                </Text>
                <Button title='Order Now' disabled={cartItems.length === 0}
                    onPress={() => dispatch(addToOrder(cartItems, totalQuant))}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.productId}
                renderItem={(itemData) => <ProductInCart titel={itemData.item.productTitle}
                    quantity={itemData.item.quantity}
                    sum={itemData.item.sum}
                    removeitem={() => { dispatch(removeFromCart(itemData.item.productId)) }}
                />}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    screeen: {
        margin: 20
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText: {
        fontSize: 18
    }
})
