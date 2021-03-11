import {StyleSheet} from 'react-native';
import Colors from './colors.style';

const extraSmallFontSize= {
  fontSize: 10,
}
const smallFontSize= {
  fontSize: 11,
}
const mediumFontSize= {
  fontSize: 14,
}
const largeFontSize= {
  fontSize: 25,
}
const extraLargeFontSize= {
  fontSize: 30,
}

export default StyleSheet.create({

  EXTRA_SMALL_GRAY_REGULAR_TEXT: {
    ...extraSmallFontSize,
    fontFamily: 'Montserrat-Regular',
    color: Colors.darkGray
  },
  SMALL_BOLD_GRAY_TEXT: {
    ...smallFontSize,
    fontFamily: 'Montserrat-Bold',
    color: Colors.darkGray
  },
  SMALL_BLACK_TEXT: {
    ...smallFontSize,
    fontFamily: 'Montserrat-Bold',
    color: Colors.black
  },
  SMALL_LIGHTGREEN_REGULAR_TEXT: {
    ...smallFontSize,
    fontFamily: 'Montserrat-Regular',
    color: Colors.lightGreen
  },
  MEDIUM_LIGHTGREEN_REGULAR_TEXT: {
    ...mediumFontSize,
    fontFamily: 'Montserrat-Regular',
    color: Colors.lightGreen
  },
  MEDIUM_WHITE_BOLD_TEXT: {
    ...mediumFontSize,
    fontFamily: 'Montserrat-Bold',
    color: Colors.white
  },
  MEDIUM_REGULAR_TEXT: {
    ...mediumFontSize,
    fontFamily: 'Montserrat-Regular',
  },
  LARGE_WHITE_BOLD_TEXT: {
    ...largeFontSize,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white
  },
  EXTRA_LARGE_WHITE_BOLD_TEXT: {
    ...extraLargeFontSize,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white
  },
});
