import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const AdminProduct = ({ price, title, image, pressoEdit, pressOnDelete }) => {
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
                <View style={{ width: 80 }}>
                    <Button title='Edit' onPress={pressoEdit} />
                </View>

                <Button title='Delete' onPress={pressOnDelete} />
            </View>
        </View>
    )
}

export default AdminProduct

const styles = StyleSheet.create({
    container: {
        height: 300,
        margin: 10,
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
