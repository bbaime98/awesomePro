import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Homescreen/HomeScreen'
import StepScreen from '../screens/StepScreen/StepScreen'
import routes from './routes'

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
      <Stack.Navigator>
          <Stack.Screen
              options={{headerShown: false}}
              name={routes.HOME} component={HomeScreen} />
          <Stack.Screen
               options={{headerShown: false}}
              name={routes.STEPS} component={StepScreen} />
      </Stack.Navigator>
  );
}

export default HomeStackNavigator;
