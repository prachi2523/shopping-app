import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Notifications = () => {
    return (
        <View style={style.container}>
            <Text>Oops! You don't have any notifications</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    }
})

export default Notifications