import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { getAuthToken } from '../../services/storageService';
import { getOnBoard } from '../../services/storageService';
import React, { useContext, useEffect, useState } from 'react'
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthContexts';
import { ActivityIndicator, View } from 'react-native';
import ActivityLoader from '../components/ActivityLoader';


const NavigationStack = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    return (
        <>
            {isLoading ? <ActivityLoader /> :
                <NavigationContainer>
                    {isAuth ? <AppStack /> : <AuthStack />}
                </NavigationContainer>}
        </>

    )
}

export default NavigationStack