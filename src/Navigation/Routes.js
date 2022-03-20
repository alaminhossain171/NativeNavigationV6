import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../constains/NavigationStrings';
const Stack = createNativeStackNavigator();
import {Home, About, Contact} from '../Screens';
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ presentation:'card' }} initialRouteName={NavigationStrings.HOME}>
        <Stack.Screen  options={{ title: 'My home page' }} name={NavigationStrings.HOME} component={Home} />
        <Stack.Screen name={NavigationStrings.ABOUT} component={About} />
        <Stack.Screen name={NavigationStrings.CONTACT} component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
