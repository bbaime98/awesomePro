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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/Homescreen/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <HomeScreen />
    </>
  );
};

export default App;
