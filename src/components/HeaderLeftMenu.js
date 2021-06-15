import {Icon} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export const HeaderLeftMenu = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Icon name="menu-outline" type="Ionicons" />
    </TouchableOpacity>
  );
};
