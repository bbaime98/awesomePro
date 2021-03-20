import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 40,
    paddingVertical: 30,
    width: '65%',
  },
  logoIcon: {
    width: '100%',
    height: '100%',
    },
    imageContainer: {
    width: 70,
    height: 70,
    },
    title: {
        ...Typography.LARGE_GRAY_REGULAR_TEXT
    },
    subTitle: {
        ...Typography.LARGE_GREEN_REGULAR_TEXT
    }
});
