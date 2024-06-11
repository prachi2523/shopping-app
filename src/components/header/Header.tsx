import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
    const [searchText, setSearchText] = useState("")

    const handleSearch = () => {
        console.log(searchText)
    }
    return (
        <View style={style.topContainer}>
            <View>
                <Ionicons name='arrow-back' size={25} />
            </View>
            <View style={style.container}>
                <TouchableOpacity style={style.searchBtn} onPress={handleSearch}>
                    <Ionicons name="search-outline" size={20} />
                </TouchableOpacity>
                <TextInput style={style.inputBox} onChangeText={setSearchText} placeholder='Search' />
            </View>
            <View>
                <TouchableOpacity>
                    <Ionicons name="cart-outline" style={style.cart} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    topContainer: {
        height: 60,
        backgroundColor: "#e7e1fb63",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 35,
        borderRadius: 12,
        width: "100%"
    },
    inputBox: {
        height: "100%",
        color: '#000000',
        fontSize: 12,
        flex: 9,
        alignItems: 'center',
    },
    searchBtn: {
        flex: 1
    },
    cart: {
        fontSize: 28,
        color: "#000000"
    }
})


export default Header