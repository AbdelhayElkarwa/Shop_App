import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addtocart } from '../redux/cartAction'
import { FontAwesome } from '@expo/vector-icons';

const ProductDetails = ({ route, navigation }) => {

    //to get id wich sent during navigation
    const { productId } = route.params
    //to store data about the product which i click on it and make search on it from redux state
    const selectedProduct = useSelector(state => state.products.availableProducts.find(produc => produc.id === productId))

    // console.log(selectedProduct)

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items)
    console.log(cart)

    //to show cart icon in header
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ marginRight: 25 }}>
                    <FontAwesome name="shopping-cart" size={28} color="white"
                        onPress={() => navigation.navigate('Cart')} />
                </View>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />

            <View style={styles.button}>
                <Text style={styles.price}>$ {selectedProduct.price.toFixed(2)}</Text>
                <View style={{ margin: 20, padding: 10 }}>
                    <Button title='ADD To CART' onPress={() => { dispatch(addtocart(selectedProduct)) }} />

                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.description}> {selectedProduct.description}</Text>

            </View>

        </ScrollView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
        marginTop: 10
    },
    price: {
        fontSize: 20,
        margin: 20,
        marginTop: 30,
        color: '#888',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        fontSize: 15,
        marginHorizontal: 10,

    }
})
