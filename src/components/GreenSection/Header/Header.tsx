import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import styles from './styles';
import {Colors, Typography} from '../../../styles';

import InputField from '../../InputField/InputField';

export default function Header() {
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <View style={styles.drawerIconSection}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image
            source={require('../../../assets/menu_icon_white.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={Typography.MEDIUM_LIGHTGREEN_REGULAR_TEXT}>
          Willkommen in
        </Text>
        <Text style={Typography.MEDIUM_WHITE_BOLD_TEXT}>
          GRun spendinos Spendenwelt
        </Text>
      </View>

      <InputField
        iconName="search"
        iconColor={Colors.white}
        placeholder="Organisation suchen"
        placeholderColor={Colors.placeholder}
      />
    </View>
  );
}
