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
import HomeScreen from './src/screens/Homescreen/HomeScreen';
import StepScreen from './src/screens/StepScreen/StepScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        {/* <HomeScreen /> */}
        <StepScreen />
    </>
  );
};

export default App;
