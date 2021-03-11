import {StyleSheet} from 'react-native';
import {Typography} from '../../../styles';

export default StyleSheet.create({
  part1Container: {
    padding: 20,
  },
  title: {
    ...Typography.SMALL_BOLD_GRAY_TEXT,
  },
  contentContainerStyle: {
    paddingVertical: 15,
  },
});
