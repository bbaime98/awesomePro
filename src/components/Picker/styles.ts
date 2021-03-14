import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.gray,
        borderRadius: 5,
        flexDirection: "row",
        paddingLeft: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
      },
      placeholder: {
        color: Colors.black,
        flex: 1,
      },
});
