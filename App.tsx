/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {DrawerNavigator} from './src/navigator/index';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
