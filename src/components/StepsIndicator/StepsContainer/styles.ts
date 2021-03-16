import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stepNumber: {
    padding: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 30,
    borderColor: Colors.green,
    borderWidth: 1,
  },
  stepName: {
    ...Typography.EXTRA_SMALL_GREEN_REGULAR_TEXT,
  },
  step1: {
    position: 'absolute',
    top: '35%',
    left: 40,
  },
  step2: {
    position: 'absolute',
    top: '35%',
    left: 55,
  },
  step2Container:{
    marginLeft: 36
  },
  step3Container:{
    marginLeft: 28
  },
  separatorContainer: {
    position: 'absolute',
    top: 5,
    left: 60,
  },
});
