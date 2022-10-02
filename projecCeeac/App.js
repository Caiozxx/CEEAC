import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateNativeStackNavigator } from '@react-navigation/native-stack';

import templates from './templates/home';
import templates from './templates/form';

const Stack = CreateNativeStackNavigator();

export default function app(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="form" component={form}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}