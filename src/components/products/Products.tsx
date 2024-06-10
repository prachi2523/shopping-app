import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { PRODUCT_DATA } from '../../../data/productData'
import ProductsCard from '../ProductCard/index'
import { StyleSheet } from 'react-native'

const Products = () => {
    return (
        <ScrollView>
            <View style={style.parent}>
                {PRODUCT_DATA?.map(products => (
                    <ProductsCard key={products?._id} product={products} />
                ))}
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    parent: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 30
    }
})

export default Products