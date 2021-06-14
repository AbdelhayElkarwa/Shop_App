import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const Product = ({ price, title, image, pressonDetail, pressOnCart }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{ width: '100%', height: '100%' }} source={{ uri: image }} />
            </View>
            <View style={styles.details}>
                <Text style={{ fontSize: 18 }}>{title}</Text>
                <Text style={{ fontSize: 16, color: '#888' }}>{price}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Details' onPress={pressonDetail} />
                <Button title='Add to Cart' onPress={pressOnCart} />
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        height: 300,
        margin: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10, overflow: 'hidden'
    },
    details: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
        marginTop: 15
    }
})
