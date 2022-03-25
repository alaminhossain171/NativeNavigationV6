import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';

const ProductDetails = ({navigation}) => {
  return (
    <View>
      <SafeAreaView>
        <HeaderComp
          text={'Product Details'}
          goBack={() => navigation.goBack()}
        />
        <Text>Product Ddfdetails</Text>
      </SafeAreaView>
    </View>
  );
};

export default ProductDetails;
