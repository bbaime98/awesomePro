import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

type Card3Props = {
  image: string;
  title: string;
  description: string
}

const Card3: React.FC<Card3Props>= ({image,description, title}) => {
  return (
    <View style={styles.cardConatiner}>
        <Image style={styles.image} source={image} />
      <View style={styles.cardInfoContainer}>
          <Text numberOfLines={1} style={styles.titleText}>
            {title}
          </Text>
          <Text numberOfLines={2} style={styles.descriptionText}>
            {description}
          </Text>
          </View>
    </View>
  );
}

export default Card3
