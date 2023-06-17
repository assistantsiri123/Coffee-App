import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import EditBottomSheet from '../Screens/Auth/EditBottomSheet';
import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import CategoryScreen from '../Screens/Home/CategoryScreen';
import AllCategoryScreen from '../Screens/Home/AllCategoryScreen';

const Stack = createStackNavigator(); 
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='EditBottomSheet' >
            <Stack.Screen 
            options={{headerShown: false}}
            name='EditBottomSheet' component={EditBottomSheet} />
            <Stack.Screen 
            options={{headerShown: false}}
            name='SplashScreen' component={SplashScreen} />
            <Stack.Screen 
            options={{headerShown: false}}
            name='LoginScreen' component={LoginScreen} />
            <Stack.Screen 
            options={{headerShown: false}}
            name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen
            name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
            <Stack.Screen screenOptions={{ headerStyle: { backgroundColor: 'blue' } }}
            name='AllCategoryScreen' component={AllCategoryScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
