import React from 'react';
import {View, Text, Button} from 'react-native';
import {s} from '../css/homeCSS/style';

const StackScreenB = ({navigation}) => {
  return (
    <View style={s.homeContainer}>
      <Text style={s.text}> You are in Screen B</Text>
      <Text style={s.text}>
        {' '}
        You can use the default button in the header to go back or you can use
        the function goBack()
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default StackScreenB;
