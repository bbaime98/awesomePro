import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Typography} from '../../styles';
import styles from './styles';

type CardProps = {
  amount: {};
  icon: string;
  title: string;
  date: string;
  onPress:Function
  // source: object
}

const Card: React.FC<CardProps>= ({amount, icon, title, date, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.cardConatiner}>
      <View style={styles.amountContainer}>
        <Text style={Typography.MEDIUM_WHITE_BOLD_TEXT}>€</Text>
        <Text style={Typography.EXTRA_LARGE_WHITE_BOLD_TEXT}>{amount}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Image style={styles.smallIcon} source={icon} />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={2} style={styles.descriptionText}>
            {title}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      </View>
      </TouchableOpacity>
  );
}

export default Card
