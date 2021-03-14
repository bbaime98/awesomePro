import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export default StyleSheet.create({
  textInput: { 
    ...Typography.EXTRA_SMALL_GRAY_REGULAR_TEXT,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.darkGreen,
    borderRadius: 5,
    marginVertical: 10,
    width: "100%"
  },
  searchIcon: {
    // marginRight: 20,
  },
});
