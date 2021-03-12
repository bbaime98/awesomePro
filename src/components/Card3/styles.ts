import {StyleSheet} from 'react-native';
import { Colors, Typography} from '../../styles';

export default StyleSheet.create({
  cardConatiner: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 150,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor:Colors.white,
    elevation: 0.7
  },
  image: {
    width: "100%",
    height: "60%",
  },
  cardInfoContainer:{
    width: '80%',
    height: "40%",
    justifyContent: "space-evenly"
  },
  titleText: {
    ...Typography.MEDIUM_BLACK_REGULAR_TEXT,
  },
  descriptionText: {
    ...Typography.SMALL_GRAY_REGULAR_TEXT,
  },
});
