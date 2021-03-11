import React from 'react'
import { View, Text } from 'react-native'
import Part1 from '../Part1/Part1'
import styles from './styles'

export default function Container() {
    return (
        <View style={styles.container}>
            <Part1 />
        </View>
    )
}
