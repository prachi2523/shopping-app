import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Products from '../components/products/index'
import ActionTab from '../components/actionsTabs/ActionTab'
import Header from '../components/header'

const Shop = ({ navigation }: any) => {
    return (
        <View style={style.tabs}>
            <Header />
            <ActionTab navigation={navigation} />
            <Products />
        </View>
    )
}

const style = StyleSheet.create({
    tabs: {
        gap: 15,
        flexDirection: 'column',
        height: '100%'
    }
})

export default Shop