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
        <LineSeparator customStyle={styles.step1}/>
        </View>

        <View style={styles.step2Container}>
        <Step  counter={2} stepName="Meine Daten" />
        <LineSeparator customStyle={styles.step2}/>
        </View>

        <View style={styles.step3Container}>
        <Step  counter={3} stepName="bestatigen" />
        </View>

      </View>
    </View>
  );
}
