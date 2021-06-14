import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from '../redux/cartAction'
const productOverView = (props) => {
    //usesellector take state in redux and make arrow function on it
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch()

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <Product
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                pressonDetail={() => {
                    props.navigation.navigate({
                        name: 'ProductDetails',
                        params: {
                            productId: itemData.item.id,
                            title: itemData.item.title
                        }
                    })
                }}
                pressOnCart={() => { dispatch(addtocart(itemData.item)) }}
            />}
        />
    )
}

export default productOverView

const styles = StyleSheet.create({})
