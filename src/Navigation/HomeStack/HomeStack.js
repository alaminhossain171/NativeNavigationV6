import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../../Screens';
import ProductDetails from '../../Screens/ProductDetails/ProductDetails';
import Search from '../../Screens/Search/Search';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default HomeStack;
