import {StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

export default StyleSheet.create({
  textInput: {
    // padding: 10,
    // fontSize: 18,
    //   fontFamily: 'semiBold',
    //   color: Colors.white,
    // paddingLeft: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.darkGreen,
    borderRadius: 5,
    margin: 10,
  },
  searchIcon: {
    paddingRight: 10,
  },
});
