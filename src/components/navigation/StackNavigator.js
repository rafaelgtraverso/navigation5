import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackScreenA from '../../screens/StackScreenA';
import StackScreenB from '../../screens/StackScreenB';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen A" component={StackScreenA} />
      <Stack.Screen name="Screen B" component={StackScreenB} />
      <Stack.Screen name="Screen C" component={StackScreenA} />
    </Stack.Navigator>
  );
};
