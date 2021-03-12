import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

type Card2Props = {
  icon: string;
  title: string;
  // source: object
}

const Card2: React.FC<Card2Props>= ({icon, title}) => {
  return (
    <View style={styles.cardConatiner}>
        <Image style={styles.smallIcon} source={icon} />
          <Text numberOfLines={2} style={styles.descriptionText}>
            {title}
          </Text>
    </View>
  );
}

export default Card2
