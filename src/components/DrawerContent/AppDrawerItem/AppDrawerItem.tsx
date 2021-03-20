import React from 'react'
import { View, Text } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colorsStyle from '../../../styles/colors.style';

type AppDrawerItemProps = {
    label: string,
    iconName: string,
    onPress: Function
}
const AppDrawerItem  = ({label, iconName, onPress}: AppDrawerItemProps) => {
    return (
        <DrawerItem
            style={styles.drawerItem}
            label={label}
            icon={() => <Icon name={iconName} color={colorsStyle.darkGray} size={20} />}
            activeTintColor="red"
            onPress={onPress}
        />
    )
}
export default AppDrawerItem
