import { View, Text,Button } from 'react-native'
import React from 'react'

export default function Contact({navigation}) {
  return (
    <View>
      <Text>Contact</Text>
      <Button title='go to explore' onPress={()=>navigation.navigate('Explore')} />
      <Button title='go to message' onPress={()=>navigation.navigate('Message')} />
    </View>
  )
}