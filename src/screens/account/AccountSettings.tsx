import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { USER_DATA } from '../../../../data/userData'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AccountSetting = () => {

    const navigation = useNavigation()

    const handleEditProfile = () => {
        //@ts-ignore
        navigation.navigate("Profile")
    }

    return (
        <View>
            <View style={style.parentConta}>
                <Image source={{ uri: USER_DATA.profileImage }} style={style.img} />
                <Text>Hi!
                    <Text> {USER_DATA.name}</Text>
                </Text>
                <Text>email: {USER_DATA.email}</Text>
            </View>
            <View style={style.settingCont}>
                <Text style={style.heading}>Acount Setting</Text>
                <View style={style.innerConta}>
                    <TouchableOpacity style={style.text} onPress={handleEditProfile}>
                        <Ionicons name='pencil' style={style.icon} />
                        <Text>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.text}>
                        <Ionicons name='language' style={style.icon} />
                        <Text>Select Language</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.text}>
                        <Ionicons name='notifications-circle' style={style.icon} />
                        <Text>Notifications Setting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.text}>
                        <Ionicons name='headset' style={style.icon} />
                        <Text>Help Center</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const style = StyleSheet.create({
    parentConta: {
        alignItems: 'center',
        top: 20,
        gap: 5
    },
    img: {
        width: 50,
        height: 50
    },
    settingCont: {
        top: 40,
        gap: 15,
        padding: 20
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#000000",
    },
    innerConta: {
        gap: 10
    },
    icon: {
        fontSize: 20,
        color: "#0c9deb"
    },
    text: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    }
})

export default AccountSetting