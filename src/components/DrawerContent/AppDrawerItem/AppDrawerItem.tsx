import React from 'react'
import { DrawerItem } from '@react-navigation/drawer';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colorsStyle from '../../../styles/colors.style';

type AppDrawerItemProps = {
    label: string,
    iconName: string,
    route: string,
    navigation: {
        navigate: Function
    }
}
const AppDrawerItem  = ({label, iconName, route, navigation}: AppDrawerItemProps) => {
    return (
        <DrawerItem
            style={styles.drawerItem}
            label={label}
            icon={() => <Icon name={iconName} color={colorsStyle.darkGray} size={20} />}
            activeTintColor="red"
            onPress={()=>navigation.navigate(route)}
        />
    )
}
export default AppDrawerItem
