import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { setOnBoard } from '../../services/storageService'
import { AuthContext } from '../context/AuthContexts'

const OnBoarding = ({ navigation }: any) => {
    const { setOnboarded } = useContext(AuthContext)

    const handleFinish = async () => {
        await setOnBoard();
        setOnboarded(true)
        navigation.navigate("HomeScreen")
    }

    return (
        <View>
            <Image source={{ uri: 'https://img.freepik.com/free-vector/welcome-concept-illustration_114360-240.jpg?t=st=1718097836~exp=1718101436~hmac=382204434d2001753f6a1caa204c1902462247c4f325b5471a2d622fa39d458c&w=826' }} style={styles.coverImage} />
            <Button title='Finish' onPress={handleFinish} />
        </View>
    )
}
const styles = StyleSheet.create({
    coverImage: {
        width: '100%',
        height: '90%'
    }
})
export default OnBoarding