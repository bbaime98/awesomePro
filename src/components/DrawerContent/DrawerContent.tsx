import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import ContentHeader from './ContentHeader/ContentHeader';
import routes from '../../navigator/routes';
import AppDrawerItem from './AppDrawerItem/AppDrawerItem';
import Separator from '../StepsIndicator/LineSeparator/LineSeparator';
import styles from './styles';

const items = [
  [
    {
      label: 'Werde ein spendino!',
      iconName: 'star',
      route: routes.FEED,
    },
    {
      label: 'Spendenvelauf',
      iconName: 'history',
      route: routes.STEPS,
    },
  ],
  [
    {
      label: 'Kontaktiere uns',
      iconName: 'email',
      route: routes.ABOUT,
    },
    {
      label: 'Freund einladen',
      iconName: 'share',
      route: routes.STEPS,
    },
    {
      label: 'Uber uns',
      iconName: 'info-outline',
      route: routes.FEED,
    },
  ],
  [
    {
      label: 'AGBs',
      iconName: 'attach-file',
      route: routes.FEED,
    },
    {
      label: 'Datenschutzerklarung',
      iconName: 'lock-outline',
      route: routes.FEED,
    },
  ],
];

export default function DrawerContent({navigation}) {
  return (
    <>
      <ContentHeader />
      <DrawerContentScrollView>
        <Separator width="90%" customStyle={styles.separator} />
        <AppDrawerItem iconName="person-add" label="Werde ein spendino!"  navigation={navigation} route={routes.STEPS} />
        <Separator width="90%" customStyle={styles.separator} />
        {items[0].map((item) => (
          <AppDrawerItem
            navigation={navigation}
            key={item.label}
            iconName={item.iconName}
            label={item.label}
            route={item.route}
          />
        ))}
        <Separator width="90%" customStyle={styles.separator} />
        {items[1].map((item) => (
          <AppDrawerItem
            navigation={navigation}
            key={item.label}
            iconName={item.iconName}
            label={item.label}
            route={item.route}
          />
        ))}
        <Separator width="90%" customStyle={styles.separator} />
        {items[2].map((item) => (
          <AppDrawerItem
            navigation={navigation}
            key={item.label}
            iconName={item.iconName}
            label={item.label}
            route={item.route}
          />
        ))}
      </DrawerContentScrollView>
    </>
  );
}
