import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';

const Search = ({navigation,route}) => {
  return (
    <View>
      <SafeAreaView>
        <HeaderComp text={'Search page'} goBack={() => navigation.goBack()} />
        <Text>{route.params.user}</Text>
      </SafeAreaView>
    </View>
  );
};

export default Search;