import React from 'react';
import {View, Text, Button} from 'react-native';
import {s} from '../css/homeCSS/style';

const TabScreen2 = ({navigation}) => {
  return (
    <View style={s.homeContainer}>
      <Text style={s.text}> This is Screen 2</Text>
      <Text style={s.text}>
        {' '}
        Use the bottom tabs to navigate between screens
      </Text>
      <Button
        title="Go back to Navigators"
        onPress={() => navigation.navigate('Navigators')}
      />
    </View>
  );
};

export default TabScreen2;
