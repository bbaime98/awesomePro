import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../styles';

export default StyleSheet.create({
  textInput: { 
    ...Typography.EXTRA_SMALL_GRAY_REGULAR_TEXT,
    width: "90%",
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.darkGreen,
    borderRadius: 5,
    marginVertical: 10,
  },
  searchIcon: {
    paddingRight: 10,
  },
});
