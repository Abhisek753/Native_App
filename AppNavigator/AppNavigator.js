// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from '../components/SignupPage';
import LoginForm from '../components/LoginPage';
import AuthButtons from '../components/HomePage';
import CarausalPage from '../components/Carausal';
import ProfilePage from '../components/ProfilePage';
import ProfileData from '../components/ProfileData';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
        <Stack.Screen name="Home" component={AuthButtons} />
        <Stack.Screen name="Page" component={CarausalPage} />
        <Stack.Screen name="Signup" component={SignUpForm} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="ProfileData" component={ProfileData} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
