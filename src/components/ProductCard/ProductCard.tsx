import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { data } from '../../../data/Quantity';
import DropDown from '../dropDown/DropDown';
import { PRIMARY_COLOR } from '../../utils/color';

interface ProductProps {
    product: {
        name: string,
        _id: any,
        imageUrl: string,
        description: string,
        price: string
    },
    navigation: any
}

const ProductsCard: React.FC<ProductProps> = ({ navigation, product }) => {
    const [value, setValue] = useState<any>(data[0]);

    const handleDetail = (id: any) => {
        navigation.navigate('ProductDetail', { id })
    }

    const handleAddToCart = (id: any) => {
        console.log('Added to cart!')
    }
    console.log(value)
    return (
        <TouchableOpacity style={style.prodContainer} onPress={() => handleDetail(product?._id)}>
            <Image source={{ uri: product?.imageUrl }} style={style.prodImage} />
            <View>
                <Text style={style.prodTitle}>{product?.name}</Text>
                <Text style={style.prodDesc}>{product?.description}</Text>
                <Text style={style.prodDesc}>${product?.price}</Text>
            </View>
            <View style={style.eventCont}>
                <DropDown style={dropStyle} value={value} setValue={setValue} data={data} />
                <TouchableOpacity style={style.eventCart} onPress={handleAddToCart}>
                    <Text style={style.addCart}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const dropStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "100%",
    },
    dropdown: {
        borderColor: PRIMARY_COLOR,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 15,
    },
    itemContainer: {
        height: 49,
        color: "#000000",
    },
    itemTextStyle: {
        color: "#000000",
        fontSize: 14
    },
})

const style = StyleSheet.create({
    prodContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        width: "45%",
        maxHeight: 281,
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 8,
        marginVertical: 10,
        backgroundColor: '#ffff',
        gap: 12,
    },
    prodImage: {
        width: "100%",
        height: 111,
        objectFit: 'cover',
    },
    prodTitle: {
        fontSize: 14,
        color: "#000000",
        fontWeight: "500"
    },
    prodDesc: {
        fontSize: 12,
        color: "#656363",
    },
    eventCont: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "95%",
        gap: 7
    },
    eventCart: {
        backgroundColor: PRIMARY_COLOR,
        width: "100%",
        justifyContent: 'center',
        padding: 7,
        alignItems: 'center',
        borderRadius: 6,
        fontSize: 12,
        borderColor: PRIMARY_COLOR,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    qnty: {
        color: '#000000'
    },
    addCart: {
        color: "#ffffff"
    }
})

export default ProductsCard