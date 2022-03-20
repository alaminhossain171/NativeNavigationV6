/* eslint-disable no-unused-vars */
import {View, Text,Button} from 'react-native';
import React from 'react';
import styles from './Style';
export default function About({navigation, route}) {
  return (
    <View>
      <Text>{route.params.title}</Text>
      <Button title='top' onPress={()=>navigation.popToTop()} />
    </View>
  );
}
