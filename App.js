/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigatorsScreen from './src/screens/NavigatorsScreen';
import {BottomTabNavigator} from './src/components/navigation/BottomTabNavigator';
import {StackNavigator} from './src/components/navigation/StackNavigator';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Navigators">
        <Drawer.Screen
          name="Navigators"
          component={NavigatorsScreen}
          options={{
            headerTitle: 'Navigators (Drawer Navigator)',
            // headerRight: props => <HeaderLeftMenu {...props} />,
          }}
        />
        <Drawer.Screen name="Stack" component={StackNavigator} />
        <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
