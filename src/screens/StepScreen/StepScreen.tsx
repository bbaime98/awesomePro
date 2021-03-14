import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Picker from '../../components/Picker/Picker';
import {StepsContainer} from '../../components/StepsIndicator';
import {Colors, Typography} from '../../styles';
import styles from './styles';

export default function StepScreen() {
  return (
    <View style={styles.stepScreenContainer}>
        <View style={styles.stepsShadow}> 
      <StepsContainer />
        </View>
      <View style={styles.belowSection}>
        <Picker />
        <View style={styles.inputSection}>
          <View style={styles.paddingRight}>
            <Button title="25€" />
          </View>
          <View style={styles.paddingRight}>
            <Button title="50€" />
          </View>
          <View style={styles.inputWidth}>
            <InputField
              iconName="euro"
              placeholder="0,00"
              inputContainerStyles={styles.inputContainerStyles}
              placeholderColor={Colors.darkGray}
            />
          </View>
        </View>
        <Button
          title="NaCHSTER"
          btnStyles={styles.ActionBtn}
          btnTextStyles={Typography.MEDIUM_WHITE_BOLD_TEXT}
        />
      </View>
    </View>
  );
}
