import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator'
import DrawerContentComponent from '../components/DrawerContent/DrawerContent'
import routes from './routes'
import AboutUsScreen from '../screens/AboutUsScreen/AboutUsScreen'
import { Colors } from '../styles';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContentComponent {...props} />}
      drawerContentOptions = {{
        activeTintColor: Colors.green
      }}
    >
      <Drawer.Screen
        name={routes.FEED} component={HomeStackNavigator} />
      <Drawer.Screen name={routes.ABOUT} component={AboutUsScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator
