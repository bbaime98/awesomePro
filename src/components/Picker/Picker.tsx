import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from 'react-native';
import DownwardArrow from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../styles';
import styles from './styles'

export default function Picker() {
  return (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.placeholder}>Einmaling</Text>
          <TouchableOpacity
            style={{padding: 10}}>
            <DownwardArrow
              name="caretdown"
              size={9}
              color={Colors.darkGray}
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
