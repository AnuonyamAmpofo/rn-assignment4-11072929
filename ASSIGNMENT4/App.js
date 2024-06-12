import { StatusBar } from 'expo-status-bar';
import  { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logins from './screens/Login';
import Homepage from './screens/Homepage';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name= "Login" component={Logins} options={{headerShown: false}}/>
        <Stack.Screen name= "Homepage" component={Homepage} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
  
}


