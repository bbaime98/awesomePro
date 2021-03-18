import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ContentHeader from './ContentHeader/ContentHeader'

export default function DrawerContent(props) {
  return (
    <>
      <ContentHeader />
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => console.log('https://mywebsite.com/help')}
      />
      </DrawerContentScrollView>
      </>
  );
}
