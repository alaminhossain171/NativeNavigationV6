/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button,TouchableOpacity} from 'react-native';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './style';
import NavigationStrings from '../../constains/NavigationStrings';
export default function Home({navigation}) {
  const handleRoute=()=>{
    return navigation.navigate(NavigationStrings.ABOUT,{title:'Alamin will done!'})
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <View style={{ flexDirection:'row',backgroundColor:'green'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Contact')} style={{flex:1, backgroundColor:'pink',padding:30,margin:10 }}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Contact')} style={{flex:2, backgroundColor:'pink',padding:30,margin:10 }}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.push('Contact')} style={{flex:2, backgroundColor:'pink',padding:30,margin:10 }}>
        <Text>Profile</Text>
      </TouchableOpacity>
      </View>
     
      <Button
        title="go to About"
        onPress={handleRoute}
      />
    </View>
  );
}
