import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const [searchText, setSearchText] = useState("")

  const handleSearch = () => {
    console.log(searchText)
  }
  return (
    <View style={{height:50}}>
      <View style={style.container}>
        <TextInput style={style.inputBox} onChangeText={setSearchText} />
        <TouchableOpacity style={style.searchBtn} onPress={handleSearch}>
          <FontAwesome name="search" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    // borderBlockColor:'red',
    // borderWidth:2,
    // borderStyle:'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    height: 10,
    marginTop: 15
  },
  inputBox: {
    borderWidth: 0.2,
    width: "100%",
    position: 'absolute',
    left: '2%',
    height:35,
    color:'#000000',
    backgroundColor:'#fff',
    borderRadius:4,
    fontSize:15
  },
  searchBtn: {
    position: 'absolute',
    left: "95%"
  }
})

export default Header