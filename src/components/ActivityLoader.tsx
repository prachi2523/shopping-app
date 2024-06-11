import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR } from '../utils/color'

const ActivityLoader = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size={'large'} color={PRIMARY_COLOR} />
        </View>
    )
}

export default ActivityLoader