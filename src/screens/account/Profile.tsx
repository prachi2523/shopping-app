import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { USER_DATA } from '../../../data/userData'
import { PRIMARY_COLOR } from '../../utils/color'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/authSlice'
import { UserProps, getuser } from '../../../services/storageService'
import { AuthContext } from '../../context/AuthContexts'

export default function Profile({ navigation }: any) {

    const dispatch = useDispatch()

    const [user, setUser] = useState<UserProps>();
    const { setIsAuth } = useContext(AuthContext)

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        let user = await getuser();
        if (user) {
            setUser(JSON.parse(user))
        }
    }

    const handleLogOut = () => {
        setIsAuth(null)
        dispatch(logOut())
    }

    return (
        <View style={style.conatiner}>
            <View style={style.content}>
                <Text style={style.heading} onPress={navigation.back}>Hi! {user?.firstName} {user?.lastName}</Text>
                <TouchableOpacity style={style.btn} onPress={handleLogOut}>
                    <Text style={style.text}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    conatiner: {
        padding: 15,
    },
    content: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: "100%"
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    btn: {
        width: '100%',
        backgroundColor: PRIMARY_COLOR,
        padding: 8,
        alignItems: 'center'
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold'
    }
})