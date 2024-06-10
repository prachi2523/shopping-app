import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import Contact from '../screens/Contact';
import Profile from '../screens/account/Profile';
import Header from '../components/header/index';
import DrawerNavigator from './DrawerNavigator';


const Tab = createBottomTabNavigator();


const TabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#2e4e99",
            tabBarInactiveTintColor: "#000000cd",
            tabBarLabelStyle: {
                fontWeight: '900',
                marginBottom: 5
            },
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name='home' color={color} size={25} />
                ),
                tabBarLabel: "Home"
            }} />
            <Tab.Screen name="Shop" component={DrawerNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name='category' color={color} size={25} />
                ),
                // header: () => <Header />
                headerShown: false
            }} />
            <Tab.Screen name="Contact" component={Contact} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name='call' color={color} size={25} />
                ),
                tabBarBadge: 3,
                header: () => <Header />
            }} />
            <Tab.Screen name="Account" component={Profile} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name='person-outline' color={color} size={25} />
                ),
                header: () => <Header />
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigator