import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    const [searchText, setSearchText] = useState("")

    const handleSearch = () => {
        console.log(searchText)
    }
    return (
        <View style={style.topContainer}>
            <View style={style.container}>
                <TextInput style={style.inputBox} onChangeText={setSearchText} />
                <TouchableOpacity style={style.searchBtn} onPress={handleSearch}>
                    <FontAwesome name="search" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <FontAwesome name="shopping-cart" style={style.cart} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    topContainer: {
        height: 70,
        // borderColor: 'red',
        // borderWidth: 2,
        // borderStyle: 'solid',
        backgroundColor: "#e7e1fb63",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        height: 10,
    },
    inputBox: {
        width: "100%",
        position: 'absolute',
        left: '2%',
        height: 35,
        color: '#000000',
        backgroundColor: '#fff',
        borderRadius: 12,
        fontSize: 15
    },
    searchBtn: {
        position: 'absolute',
        left: "5%"
    },
    cart: {
        fontSize: 28,
        color: "#000000"
    }
})


export default Header