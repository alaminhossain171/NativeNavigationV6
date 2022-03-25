/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import TabRoutes from './TabRoutes'
import ProductDetails from '../Screens/ProductDetails/ProductDetails'
import Search from '../Screens/Search/Search'
import Message from '../Screens/Contact/Message'

const MainStack = (Stack) => {

  return (
    <>
     <Stack.Screen
     name='TabRoutes'
     component={TabRoutes}
     />
       <Stack.Screen
     name='Message'
     component={Message}
     />
      
    </>
  )
}

export default MainStack