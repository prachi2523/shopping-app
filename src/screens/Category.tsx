import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Category = () => {

    const navigation = useNavigation();
    const routes = navigation.getState()?.routeNames;
    console.log(routes)
    return (
        <View>
            <Text>Category</Text>
        </View>
    )
}

export default Category