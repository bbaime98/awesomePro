import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type InputFieldProps = {
  iconName: string;
  iconColor?: string;
  placeholder: string;
  placeholderColor: string;
  inputContainerStyles?: object
}

const InputField: React.FC<InputFieldProps> = ({
  iconName,
  iconColor,
  placeholder,
  placeholderColor,
  inputContainerStyles,
}) => {
  return (
    <View style={[styles.textInputContainer, inputContainerStyles]}>
      <View style={{width: '75%'}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={styles.textInput}
        />
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Icon
          style={styles.searchIcon}
          name={iconName}
          size={13}
          color={iconColor}
        />
      </View>
    </View>
  );
}

export default InputField
