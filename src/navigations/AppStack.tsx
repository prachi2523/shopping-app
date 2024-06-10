import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const AppStack = ({ onboarded }: any) => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={onboarded ? "HomeScreen" : "Onboarding"}>
            <Stack.Screen name='HomeScreen' component={TabNavigator} options={{ headerShown: false }} />
            {/* <Stack.Screen name='About' component={About} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
            <Stack.Screen name='CartDetail' component={Cart} />
            <Stack.Screen name='Checkout' component={OrderCheckOut} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Onboarding' component={OnBoarding} /> */}
        </Stack.Navigator>
    )
}

export default AppStack