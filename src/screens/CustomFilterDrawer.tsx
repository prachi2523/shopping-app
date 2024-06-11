import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react'
import { filterOptions } from '../../data/CategoryData'
import { PRIMARY_COLOR } from '../utils/color'

const CustomFilterDrawer = (props: any) => {
    const [activeOption, setActiveOption] = useState('Categories')

    const rednerActiveOptions = (option: string) => {
        setActiveOption(option)
    }

    return (
        <View style={styles.parentCont}>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.navigation.closeDrawer}>
                    <Ionicons name='arrow-back' size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.filterText}>Clear Filter</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.filterOptionParent}>
                <View style={styles.filterOptions}>
                    {filterOptions?.map((options, index) => <TouchableOpacity key={index} style={[styles.contentName, (activeOption == options.name) && { borderLeftColor: PRIMARY_COLOR, backgroundColor: '#c9c9c933', borderLeftWidth: 2 }]} onPress={() => rednerActiveOptions(options?.name)}>
                        <Text style={[styles.filterName, (activeOption == options.name) && { color: PRIMARY_COLOR }]}>{options.name}</Text>
                    </TouchableOpacity>)}
                </View>
                <View style={styles.contentPage}>
                    {filterOptions?.find(option => option?.name === activeOption)?.options?.map((category, index) => <TouchableOpacity key={index} style={styles.option}>
                        <Text style={styles.optionName}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>)}
                </View>
            </View>
            <View style={styles.bottomView}>
                <View>
                    <Text>379 Products found</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={props.navigation.closeDrawer}>
                    <Text style={styles.text}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentCont: {
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    filterText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#514d4d53'
    },
    filterOptionParent: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        padding: 10,
    },
    filterOptions: {
        flex: 0.35,
        flexDirection: 'column',
        borderRightColor: '#e3e1e1ad',
        borderRightWidth: 1,
    },
    contentPage: {
        flex: 0.65,
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
        padding: 10
    },
    filterName: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: "#555353"
    },
    contentName: {
        borderStyle: 'solid',
    },
    option: {
        borderColor: 'gray',
        borderWidth: 0.4,
        borderStyle: 'solid',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 100,
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: "6%",
        backgroundColor: "#ffffff",
        borderTopColor: '#ebebeb',
        borderTopWidth: 0.5,
        borderColor: '#bcbaba',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    btn: {
        backgroundColor: PRIMARY_COLOR,
        padding: 4,
        paddingHorizontal: 24,
        borderRadius: 4,
        maxWidth: 86,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "#ffff",
        fontSize: 14,
        fontWeight: '700',
    },
    optionName: {
        color: "#343434"
    }
})

export default CustomFilterDrawer