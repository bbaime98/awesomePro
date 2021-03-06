import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from '../../Card/Card';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../navigator/routes';

const items = [
  {
    id: 1,
    title:
      'Product 1 with all information needed with even more details are within the title',
    date: '14 Feb 2020',
    amount: '2.5K',
    icon: require('../../../assets/icons3.png'),
  },
  {
    id: 2,
    title:
      'Brand new product with different message and information needed with even more',
    date: '20 Nov 2020',
    amount: '8K',
    icon: require('../../../assets/icons3.png'),
  },
  {
    id: 3,
    title:
      '3rd cool product with different message and information needed with even more',
    date: '06 Nov 2020',
    amount: '10K',
    icon: require('../../../assets/icons3.png'),
  },
  {
    id: 4,
    title:
      '4rd cool product with different message and information needed with even more',
    date: '06 Nov 2020',
    amount: '6.3K',
    icon: require('../../../assets/icons3.png'),
  },
];

export default function Part1() {
  const navigation = useNavigation()
  return (
    <View style={styles.part1Container}>
      <Text style={styles.title}>Das Wundegerade gespendt, machts Du mit?</Text>

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Card
            onPress={()=>navigation.navigate(routes.STEPS)}
            amount={item.amount}
            date={item.date}
            icon={item.icon}
            title={item.title}
          />
        )}
      />
    </View>
  );
}
