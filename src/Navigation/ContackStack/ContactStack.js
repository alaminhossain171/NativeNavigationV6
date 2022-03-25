import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Contact, Home} from '../../Screens';
import ProductDetails from '../../Screens/ProductDetails/ProductDetails';
import Explore from '../../Screens/Explore/Explore';
const Stack = createNativeStackNavigator();
const ContactStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Contact} />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

export default ContactStack;