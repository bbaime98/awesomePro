import {StyleSheet} from 'react-native';
import {Card, Typography} from '../../styles';

export default StyleSheet.create({
  cardConatiner: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 100,
    marginHorizontal: 6,
    ...Card.cardConatiner
  },
  smallIcon: {
    width: 40,
    height: 40,
    ...Card.Icon,
  },
  descriptionText: {
    width: '80%',
    paddingVertical: 10,
    ...Typography.SMALL_BLACK_TEXT,
  },
});
