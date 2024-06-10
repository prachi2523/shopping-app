import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { getAuthToken } from '../../services/storageService';
import { getOnBoard } from '../../services/storageService';
import React, { useEffect, useState } from 'react'
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const NavigationStack = ({ isAuth }: any) => {

    const [onboarded, setOnboarded] = useState<any>("true");

    useEffect(() => {
        getState();
    }, []);

    const getState = async () => {
        const onboarded = await getOnBoard();
        // setOnboarded(onboarded);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                // headerStyle: {
                //     backgroundColor: '#0a80c4',
                // }, headerTintColor: '#fff',
                // headerTitleStyle: {
                //     fontWeight: 'bold',
                // },
                // header: (props) => <ImageHeader />
            }} initialRouteName={true ? "AppStack" : "AuthStack"}>
                {true ?
                    <Stack.Screen name="AppStack" options={{ headerShown: false }}>
                        {props => <AppStack {...props} onboarded={onboarded} />}
                    </Stack.Screen>
                    : <Stack.Screen name='AuthStack' component={AuthStack} options={{ headerShown: false }} />}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack