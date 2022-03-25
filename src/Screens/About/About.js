/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {View, Text,Button} from 'react-native';
import React from 'react';
import styles from './Style';
import HeaderComp from '../../Components/HeaderComp';
HeaderComp
export default function About({navigation}) {
  return (
    <View>
      <Text>about component</Text>
    <HeaderComp text="About" goBack={()=>navigation.goBack()} />
      <Button title="Search" onPress={()=>navigation.navigate('Search')} />
    </View>
  );
}
