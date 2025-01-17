import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Products from '../components/products/index'
import ActionTab from '../components/actionsTabs/ActionTab'
import Header from '../components/header'

const Shop = ({ navigation }: any) => {
    return (
        <View style={style.tabs}>
            <Header navigation={navigation} />
            <ActionTab navigation={navigation} />
            <Products navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    tabs: {
        gap: 5,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Shop