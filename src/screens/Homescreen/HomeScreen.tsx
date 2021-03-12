import React from 'react';
import {View, FlatList} from 'react-native';
import {GreenSection} from '../../components/GreenSection';
import {WhiteSection} from '../../components/WhiteSection';
import styles from './styles';
import Part3 from '../../components/WhiteSection/Part3/Part3';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.greenSectionContainer}>
        <GreenSection />
      </View>
      <View style={styles.whiteSectionContainer}>
        <FlatList
          ListHeaderComponent={() => <WhiteSection />}
          ListFooterComponent={() => <Part3 />}
        />
      </View>
    </View>
  );
}
