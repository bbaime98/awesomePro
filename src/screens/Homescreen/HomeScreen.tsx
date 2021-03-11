import React from 'react';
import {View} from 'react-native';
import {GreenSection} from '../../components/GreenSection';
import {WhiteSection} from '../../components/WhiteSection';
import styles from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.greenSectionContainer}>
        <GreenSection />
      </View>
      <View style={styles.whiteSectionContainer}>
        <WhiteSection />
      </View>
    </View>
  );
}
