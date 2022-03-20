/* eslint-disable react-native/no-inline-styles */
// In App.js in a new project

import * as React from 'react';
import {View} from 'react-native';
import Routes from './src/Navigation/Routes';

function App() {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
}

export default App;
