import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateNativeStackNavigator } from '@react-navigation/native-stack';

import Form from './templates/form';
import Home from './templates/home';

const Stack = CreateNativeStackNavigator();

export default function app(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Form" component={Form}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}