import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export default StyleSheet.create({
  inputContainerStyles: {
    backgroundColor: Colors.gray,
  },
  ActionBtn: {
    backgroundColor: Colors.green,
    borderWidth: 0,
  },
  paddingRight: {
    paddingRight: 10,
  },
  belowSection: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
  },
  inputSection: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  stepScreenContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  stepsShadow: {
    shadowColor: Colors.black, 
    elevation: 1,
    paddingBottom: 20
  },
  inputWidth:{
    width: '52%'
    }   
});
