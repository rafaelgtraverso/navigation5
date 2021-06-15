import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabScreen1 from '../../screens/TabScreen1';
import TabScreen2 from '../../screens/TabScreen2';
import NavigatorsScreen from '../../screens/NavigatorsScreen';

const Tabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Screen 1" component={TabScreen1} />
      <Tabs.Screen name="Screen 2" component={TabScreen2} />
    </Tabs.Navigator>
  );
};
