import {StyleSheet} from 'react-native';
import {Card, Colors, Typography} from '../../styles';

export default StyleSheet.create({
  cardConatiner: {
    flexDirection: 'row',
    height: 70,
    width: 300,
    marginHorizontal: 10,
    ...Card.cardConatiner
  },
  amountContainer: {
    backgroundColor: Colors.green,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'flex-end',
    justifyContent: "center",
    paddingRight: 10,
    width: '30%',
  },
  descriptionContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    maxWidth: '70%',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  smallIcon: {
    ...Card.Icon,
    width: 20,
    height: 20,
    marginHorizontal: 10,
    marginTop: 10
  },
  detailsContainer: {
    justifyContent: "center",
  },
  descriptionText: {
    width: '30%',
    ...Typography.SMALL_BLACK_TEXT,
  },
  date: {
    marginTop: 10,
    ...Typography.EXTRA_SMALL_GRAY_REGULAR_TEXT,
  },
});
