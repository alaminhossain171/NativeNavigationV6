/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './style';
import NavigationStrings from '../../constains/NavigationStrings';
import HeaderComp from '../../Components/HeaderComp';
export default function Home({navigation}) {
  const handleRoute = () => {
    return navigation.navigate(NavigationStrings.ABOUT);
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <HeaderComp text={'Home'} />
        <Button title='go to product details' onPress={()=>navigation.navigate('ProductDetails')} />
        <Button title='go to product about search' onPress={()=>navigation.navigate('About',{screen:'Search',
        
        params:{user:'hey i came from home'}
        })} />
      </SafeAreaView>
    </View>
  );
}
