import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screen/login';
import SigninScreen from './screen/signin';
import FinalScreen from './screen/final';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="lgin"
          component={HomeScreen}
          
        />
        <Stack.Screen name="sigin"  component={SigninScreen}/>
        <Stack.Screen name="final" component={FinalScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};