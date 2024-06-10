import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <StatusBar />
            <View>
                {children}
            </View>
            {/* <View style={style.footer}>
                <Footer />
            </View> */}
        </>

    )
}

const style = StyleSheet.create({
    footer: {
        position: 'absolute',
        padding: 10,
        bottom: 0,
        borderTopColor: "#95a3a0",
        borderTopWidth: 2,
        width: "100%",
        backgroundColor: "#f5cb56"
    }
})

export default Layout