import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  whiteSectionContainer: {
    backgroundColor: Colors.gray,
    flex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  greenSectionContainer: {
    flex: 1,
  },
});
