import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Picker from '../../components/Picker/Picker';
import {StepsContainer} from '../../components/StepsIndicator';
import {Colors, Typography} from '../../styles';
import styles from './styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

export default function StepScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.stepScreenContainer}>
      <View style={styles.stepHeader}>
        <TouchableOpacity
          style={styles.closeIconContainer}
          onPress={() => navigation.goBack()}>
          <CloseIcon name="close" size={25} color={Colors.black} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.stepTitle}>SPEDEN</Text>
        </View>
      </View>
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
