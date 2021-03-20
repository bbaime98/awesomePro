import React from "react"
import { View } from "react-native"
import styles from "./styles"

type SeparatorProps = {
    width?: string,
    customStyle?: {}
}
const Separator = ({width="100%", customStyle}:SeparatorProps) => <View style={[styles.separator1, {width}, customStyle]} />
export default  Separator 
