import React from 'react';
import {View, Text, Button} from 'react-native';
import {s} from '../css/homeCSS/style';

const StackScreenA = ({navigation}) => {
  return (
    <View style={s.homeContainer}>
      <Text style={s.text}>
        {' '}
        Click on the button to navigate to the next screen, with this navigation
        you will use navigate(screen) function to jump to another screen, but it
        will keep an array of screens to go back.
      </Text>
      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate('Screen B')}
      />
      <Button
        title="Go back to Navigators"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default StackScreenA;
