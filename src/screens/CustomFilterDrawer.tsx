import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { CATEGORY_DATA, filterOptions } from '../../data/CategoryData'
import { PRIMARY_COLOR } from '../utils/color'

const CustomFilterDrawer = (props: any) => {
    const [activeOption, setActiveOption] = useState('Categories')
    console.log(props)

    const rednerActiveOptions = (option: string) => {
        setActiveOption(option)
    }
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.parentCont}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={props.navigation.closeDrawer}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.filterText}>Clear Filter</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.filterOptionParent}>
                    <View style={styles.filterOptions}>
                        {filterOptions?.map(options => <TouchableOpacity style={[styles.contentName, (activeOption == options.name) && { borderLeftColor: PRIMARY_COLOR, backgroundColor: '#c9c9c933', borderLeftWidth: 3 }]} onPress={() => rednerActiveOptions(options?.name)}>
                            <Text style={styles.filterName}>{options.name}</Text>
                        </TouchableOpacity>)}
                    </View>

                    <View style={styles.contentPage}>
                        {CATEGORY_DATA?.map(category => <TouchableOpacity style={styles.option}>
                            <Text>
                                {category.name}
                            </Text>
                        </TouchableOpacity>)}
                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    parentCont: {
        padding: 10,
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    filterText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#514d4d53'
    },
    filterOptionParent: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        top: '3%',
        height: '100%',
    },
    filterOptions: {
        flex: 0.4,
        flexDirection: 'column',
        gap: 20,
    },
    contentPage: {
        flex: 0.6,
        // borderColor: 'red',
        // borderWidth: 2,
        // borderStyle: 'solid',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
        padding: 10
    },
    filterName: {
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: "#555353"
    },
    contentName: {
        borderStyle: 'solid',
    },
    option: {
        borderColor: 'gray',
        borderWidth: 0.4,
        borderStyle: 'solid',
        padding: 7,
        borderRadius: 100,
    }
})

export default CustomFilterDrawer