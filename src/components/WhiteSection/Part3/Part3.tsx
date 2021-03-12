import React from 'react';
import {View, Text } from 'react-native';
import FilterIcon from 'react-native-vector-icons/MaterialIcons';
import Card3 from '../../Card3/Card3';
import styles from './styles';
import {Colors} from '../../../styles'

const items = [
  {
    id: 1,
    title: 'Product 1he title',
    description: 'Short description',
    image: require('../../../assets/icons3.png'),
  },
  {
    id: 23,
    title: 'Brand new more',
    description: 'Short description',
    image: require('../../../assets/Firefighters.jpg'),
  },
  {
    id: 24,
    title: 'Brand new more',
    description: 'Short description',
    image: require('../../../assets/Firefighters.jpg'),
  },
  {
    id: 221,
    title: 'Brand new more',
    description: 'Short description',
    image: require('../../../assets/icons3.png'),
  },
  {
    id: 246,
    title: 'Brand new more',
    description: 'Short description',
    image: require('../../../assets/icons3.png'),
  },
  {
    id: 247,
    title: 'Brand new more',
    description: 'Short description',
    image: require('../../../assets/Firefighters.jpg'),
  },
  {
    id: 294,
    title: 'Brand new more',
    description: 'Short description',
    image: require('../../../assets/icons3.png'),
  },
];

export default function Part3() {
  return (
    <View style={styles.part3Container}>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <Text style={styles.title}>Erkunden</Text>
      <FilterIcon name="filter-list" size={25} color={Colors.black} />
      </View>
      <View style={{flexDirection: "row", flexWrap: "wrap"}}>

      {items.map((item) => (
        <View  key={item.id} style={{width: "50%"}}>
          <Card3
          image={item.image}
          title={item.title}
          description={item.description}
          />
        </View>
        ))}
        </View>
    </View>
  );
}
