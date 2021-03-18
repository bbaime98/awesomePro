import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function ContentHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
            source={require('../../../assets/icon_green.png')}
            style={styles.logoIcon}
          />
            </View>
            <View>
            <Text style={styles.title}>GRUN</Text>
            <Text style={styles.subTitle}>spendino</Text>
            </View>
            
        </View>
    )
}
