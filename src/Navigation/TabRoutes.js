/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../constains/NavigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import {Home, About, Contact} from '../Screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../Screens/Search/Search';
import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import HomeStack from './HomeStack/HomeStack';
import AboutStack from './AboutStack/AboutStack';
import ContactStack from './ContackStack/ContactStack';

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={NavigationStrings.HOME}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon name="home" size={30} color={focused ? 'green' : 'red'} />
            );
          },
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name={NavigationStrings.ABOUT}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon name="group" size={30} color={focused ? 'green' : 'red'} />
            );
          },
        }}
        component={AboutStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="mail-forward"
                size={30}
                color={focused ? 'green' : 'red'}
              />
            );
          },
        }}
        name={NavigationStrings.CONTACT}
        component={ContactStack}
      />
    </Tab.Navigator>
  );
}
