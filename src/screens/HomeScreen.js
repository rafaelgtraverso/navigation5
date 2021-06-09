import React from 'react';
import {View, Text, Button} from 'react-native';
import s from '../css/homeCSS/style';

const HomeScreen = ({navigation}) => {
  return (
    <View style={s.homeContainer}>
      <Text> Home Screen </Text>
      <Button
        title="Go to Account Screen"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
};

export default HomeScreen;
