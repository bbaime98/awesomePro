import {StyleSheet} from 'react-native';
import {Typography} from '../../../styles';

export default StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 15,
  },
  part2Container: {
    paddingHorizontal: 20,
  },
  title: {
    ...Typography.SMALL_BOLD_GRAY_TEXT,
  },
});
