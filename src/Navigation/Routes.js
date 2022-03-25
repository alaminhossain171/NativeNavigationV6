import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../constains/NavigationStrings';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
import {Home, About, Contact} from '../Screens';
import MainStack from './MainStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
       {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
