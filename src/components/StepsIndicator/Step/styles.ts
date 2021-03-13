import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../styles';

export default StyleSheet.create({
  stepCounterContainer: {
    margin: 10,
    alignItems: 'center',
  },
  stepNumberContainer: {
    padding: 5,
    width: 25,
    height: 25,
    alignItems: 'center',
    borderRadius: 30,
    borderColor: Colors.green,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  activeStepNumber: {
    ...Typography.EXTRA_SMALL_WHITE_REGULAR_TEXT,
  },
  stepNumber: {
    ...Typography.EXTRA_SMALL_GREEN_REGULAR_TEXT,
  },
  activeStepName: {
    paddingTop: 5,
    ...Typography.EXTRA_SMALL_GREEN_REGULAR_TEXT,
  },
  stepName: {
    paddingTop: 5,
    ...Typography.EXTRA_SMALL_GRAY_REGULAR_TEXT,
  },
});
