import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({ autoComplete, setValue, value, placeHolder, secureTextEntry }: any) => {
    return (
        <View>
            <TextInput style={style.inpuStyle} autoComplete={autoComplete} placeholder={placeHolder} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry} />
        </View>
    )
}

const style = StyleSheet.create({
    inpuStyle: {
        borderColor: "#3e535c",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        color: "#000000df",
        fontSize: 15,
    }
})

export default InputBox