import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Shop from '../screens/Shop';
import TestScreen from '../screens/TestScreen';
import CustomFilterDrawer from '../screens/CustomFilterDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false, drawerStyle: {
                width: '100%',
                height: '100%'
            },
        }} drawerContent={props => <CustomFilterDrawer {...props} />}>
            <Drawer.Screen name="Shop" component={Shop} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator