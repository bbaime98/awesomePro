import React from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from './styles'

type ButtonProps = {
    title: string;
    // onPress: Function;
    btnStyles?: object;
    btnTextStyles?: object
  }

const Button: React.FC<ButtonProps> = ({ title, onPress, btnStyles, btnTextStyles }) => {
  return (
    <TouchableOpacity
      style={[styles.button, btnStyles]}
    //   onPress={onPress}
    >
      <Text style={[styles.text, btnTextStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
