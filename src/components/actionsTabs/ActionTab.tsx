import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

const actionTabs = [
    {
        name: "Sort by",
        icon: "keyboard-arrow-down",
        size: 25
    },
    {
        name: "Filter",
        icon: "filter-list-alt",
        size: 25,
        isToggle: true
    },
    {
        name: "Price",
        icon: "keyboard-arrow-down",
        size: 25
    },
    {
        name: "Discount",
        icon: "keyboard-arrow-down",
        size: 25
    }
]

const ActionTab = ({ navigation }: any) => {
    const toggleDrawer = (tab: any) => {
        if (tab?.isToggle) {
            navigation.openDrawer();
        }
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.container}>
                {actionTabs?.map(tab => <TouchableOpacity style={style.content} onPress={() => toggleDrawer(tab)}>
                    <Text style={style.text}>{tab.name}</Text>
                    <MaterialIcons name={tab.icon} size={tab.size} />
                </TouchableOpacity>)}
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        gap: 6
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        justifyContent: 'center',
        paddingHorizontal: 8,
        borderRadius: 100,
        paddingVertical: 3
    },
    text: {
    }
})

export default ActionTab