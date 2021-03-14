import {StyleSheet } from "react-native"
import {Colors, Typography} from '../../styles'

export default StyleSheet.create({
    button: {
      backgroundColor: "transparent",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: Colors.green
    },
    text: {
      ...Typography.MEDIUM_GREEN_REGULAR_TEXT,
      textTransform: "uppercase",
    },
  })
