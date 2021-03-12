import {StyleSheet} from 'react-native';
import {Typography} from '../../../styles';

export default StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 15,
  },
  part3Container: {
    paddingHorizontal: 20,
  },
  title: {
    ...Typography.LARGE_GRAY_BOLD_TEXT,
  },
});
