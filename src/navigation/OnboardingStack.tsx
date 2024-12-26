import React from 'react';
import SplashScreen from '../screens/SplashIntroScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import { RootStackParamList } from './MainStack';

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SplashIntroScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
