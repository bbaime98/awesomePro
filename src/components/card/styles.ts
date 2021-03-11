import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export default StyleSheet.create({
  cardConatiner: {
    flexDirection: 'row',
    height: 70,
    width: 300,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 5,
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
    borderColor: Colors.darkGray,
    borderRadius: 30,
    borderWidth: 1,
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
