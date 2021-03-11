import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import BurgerIcon from 'react-native-vector-icons/Entypo';
import { Colors, Typography } from '../../../styles';
import SearchInputField from '../SearchInputField/SearchInputField';

export default function Header() {
  return (
    <>
      <View>
        <View style={styles.drawerIconSection}>
          <View>
            <BurgerIcon name="menu" size={24} color={Colors.white} />
          </View>
          <Image
            source={require('../../../assets/icon.png')}
            style={styles.logo}
          />
        </View>

      <View style={styles.descriptionContainer}>
        <Text style={Typography.SMALL_LIGHTGREEN_REGULAR_TEXT}>Willkommen in</Text>
        <Text style={Typography.MEDIUM_WHITE_BOLD_TEXT}>GRun spendinos Spendenwelt</Text>
      </View>
      
      <SearchInputField />
      </View>
    </>
  );
}
