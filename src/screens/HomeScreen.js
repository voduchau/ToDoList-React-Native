import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputComponent from '../components/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({navigation,title}) => {
  return (
    <ScrollView>
      <View>
      <InputComponent navigation={navigation} />
    </View>
    </ScrollView>
    
  );
};

export default HomeScreen;
