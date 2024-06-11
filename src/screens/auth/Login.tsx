import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import InputBox from '../../components/form/InputBox';
import { authenticate } from '../../../redux/authSlice';
import { useToast } from 'react-native-toast-notifications';
import { AuthContext } from '../../context/AuthContexts';

const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { onboarded, setIsAuth } = useContext(AuthContext)


    const dispatch = useDispatch()
    const toast = useToast()

    const handleRegister = () => {

        //@ts-ignore
        navigation.navigate("Register")
    }

    // emilys  emilyspass

    console.log(onboarded)

    const handleLogin = () => {
        if (email && password) {
            //@ts-ignore
            dispatch(authenticate({ username: email, password: password })).unwrap().then(res => {
                setIsAuth(res.token)
                toast.show("Login successfully", { type: 'success' })
            })

        }
    }

    return (
        <View style={style.parentContainer}>
            <FontAwesome name='user-circle' style={style.icon} />
            <View style={style.inputWrapper}>
                <InputBox autoComplete={"email"} setValue={setEmail} value={email} placeHolder={"Enter email"} />
                <InputBox autoComplete={"name"} setValue={setPassword} value={password} placeHolder={"Enter password"} secureTextEntry={true} />
                <TouchableOpacity style={style.btn} onPress={handleLogin}>
                    <Text style={style.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Don't have an account?
                        <Text style={style.link} onPress={handleRegister}> register here</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    parentContainer: {
        alignItems: 'center',
        margin: 'auto',
        width: "90%",
        backgroundColor: "#ffffff",
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 5,
        gap: 15
    },
    inputWrapper: {
        width: "100%",
        gap: 15
    },
    icon: {
        color: "#5bafd2",
        fontSize: 80
    },
    btn: {
        alignItems: 'center',
        backgroundColor: "#5bafd2",
        padding: 12,
        borderRadius: 4
    },
    btnText: {
        color: "#00000",
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
        color: "#457488",
    }
})

export default Login