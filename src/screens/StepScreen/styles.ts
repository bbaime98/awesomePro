import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export default StyleSheet.create({
  titleContainer: {
  width: "80%",
  alignItems: "center"
  },
  closeIconContainer: {
    width: "10%",
    alignItems: "center",
    
  },
  stepHeader: {
    flexDirection: 'row',
    padding: 10,
  },
  stepTitle: {
    ...Typography.EXTRA_LARGE_GREEN_BOLD_TEXT,
  },
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
