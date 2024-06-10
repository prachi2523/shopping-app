import { View, Text, Button } from 'react-native'
import React from 'react'
import { setOnBoard } from '../../../services/storageService'

const OnBoarding = () => {

    const handleFinish = async () => {
        await setOnBoard();
    }

    return (
        <View>
            <Text>OnBoarding</Text>
            <Button title='Finish' onPress={handleFinish} />
        </View>
    )
}

export default OnBoarding