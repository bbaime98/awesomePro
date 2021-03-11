import React from 'react';
import {View, Text, TextInput} from 'react-native';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../styles';
import styles from './styles';

export default function SearchInputField() {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Organisation suchen"
        placeholderTextColor={Colors.placeholder}
        style={styles.textInput}
      />
      <SearchIcon
        style={styles.searchIcon}
        name="search1"
        size={15}
        color={Colors.white}
      />
    </View>
  );
}
