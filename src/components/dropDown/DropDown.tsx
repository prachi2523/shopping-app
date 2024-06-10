import { View, Text } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown'

type DropDownProp = {
    style: any,
    data: any[],
    value: any,
    setValue: any
}
const DropDown: React.FC<DropDownProp> = ({ style, data, value, setValue }) => {
    return (
        <View style={style.container}>
            <Dropdown
                style={[style.dropdown]}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                data={data}
                maxHeight={100}
                itemContainerStyle={style.itemContainer}
                itemTextStyle={style.itemTextStyle}
                labelField="label"
                valueField="value"
                placeholder={"Select items"}
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                renderLeftIcon={() => (
                    <Text>Qunt: </Text>
                )}
                activeColor='#2e4e99'
            />
        </View>

    )
}

export default DropDown