import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../../styles';
import styles from './styles';

interface StepProps {
  active?: boolean;
  stepName: string;
  counter: number
}

const Step: React.FC<StepProps> = ({active, counter, stepName}) => (
  <View style={styles.stepCounterContainer}>
    <View
      style={[
        styles.stepNumberContainer,
        {backgroundColor: active && Colors.green, borderWidth: active ? 0 : 1},
      ]}>
      {active ? (
        <Text style={styles.activeStepNumber}>{counter}</Text>
      ) : (
        <Text style={styles.stepNumber}>{counter}</Text>
      )}
    </View>
    {active ? (
      <Text style={styles.activeStepName}>{stepName}</Text>
    ) : (
      <Text style={styles.stepName}>{stepName}</Text>
    )}
  </View>
);
export default Step;
