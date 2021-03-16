import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import LineSeparator from '../LineSeparator/LineSeparator';
import Step from '../Step/Step';

export default function StepsContainer() {
  return (
    <View>
      <View style={styles.container}>

        <View>
        <Step counter={1} stepName="Menge" active={true} />
        <View style={styles.step1}>
        <LineSeparator />
        </View>
        </View>

        <View style={styles.step2Container}>
        <Step  counter={2} stepName="Meine Daten" />
        <View style={styles.step2}>
        <LineSeparator />
        </View>
        </View>

        <View style={styles.step3Container}>
        <Step  counter={3} stepName="bestatigen" />
        </View>

      </View>
    </View>
  );
}
