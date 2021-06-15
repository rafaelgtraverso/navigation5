import React from 'react';
import {View, Button, Text} from 'react-native';
import {s} from '../css/homeCSS/style';

const HomeScreen = ({navigation}) => {
  return (
    <View style={s.homeContainer}>
      <Text style={s.homeText}>
        {' '}
        Click on the button to go to the second screen within the Stack
        Navigation
      </Text>
      <Button
        title="Go to Navigrs Screen "
        onPress={() => navigation.navigate('Navigators')}
      />
    </View>
  );
};

export default HomeScreen;
