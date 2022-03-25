import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {About, Home} from '../../Screens';
import ProductDetails from '../../Screens/ProductDetails/ProductDetails';
import Search from '../../Screens/Search/Search';
const Stack = createNativeStackNavigator();
const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default AboutStack;
