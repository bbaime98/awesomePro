import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card2 from '../../Card2/Card2';
import styles from './styles';

const items = [
  {
    id: 1,
    title:
      'Product 1 with all information needed with even more details are within the title',
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
    icon: require('../../../assets/icons3.png'),
  },
  {
    id: 4,
    title:
      '4rd cool product with different message and information needed with even more',
    icon: require('../../../assets/icons3.png'),
  },
];

export default function Part2() {
  return (
    <View style={styles.part2Container}>
      <Text style={styles.title}>Das Wundegerade gespendt</Text>

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Card2
            icon={item.icon}
            title={item.title}
          />
        )}
      />
    </View>
  );
}
