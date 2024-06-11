import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import OnBoarding from '../screens/OnBoarding';
import ProductDetail from '../screens/ProductDetail';

const AppStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='Onboarding' component={OnBoarding} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
            {/* <Stack.Screen name='About' component={About} />
            <Stack.Screen name='CartDetail' component={Cart} />
            <Stack.Screen name='Checkout' component={OrderCheckOut} />
            <Stack.Screen name='Profile' component={Profile} />
           */}
        </Stack.Navigator>
    )
}

export default AppStack