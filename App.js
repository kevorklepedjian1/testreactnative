import React, {useState, useRef} from 'react';
import { Dimensions } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  Image
} from 'react-native';
import Cakeses from './components/Cakeses';
import Form from './components/Form';

const App = () => {
  
  return (
    <View >
      <Form/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
 
});

export default App;