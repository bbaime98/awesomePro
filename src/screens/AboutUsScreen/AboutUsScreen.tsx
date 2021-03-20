import React from 'react'
import { View, Text, Button } from 'react-native'
import {useNavigation } from '@react-navigation/native'
import routes from '../../navigator/routes'

export default function AboutUsScreen() {
    const {navigate} = useNavigation()
    return (
        <View>
            <Text>Welcome, this is about us screen.</Text>
            <Button title="GO back  to Feed screen" onPress={()=>navigate(routes.FEED)}/>
        </View>
    )
}
