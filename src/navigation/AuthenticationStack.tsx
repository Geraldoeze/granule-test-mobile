import React from "react";
import SplashScreen from "../screens/Onboarding/SplashIntroScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/Authentication/SignInScreen";
import { RootStackParamList } from "./MainStack";
import SignUpScreen from "../screens/Authentication/SignUpScreen";
import ForgotPasswordScreen from "../screens/Authentication/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import VerifyScreen from "../screens/Authentication/VerifyScreen";
import { Animated } from "react-native";
import SetPasscodeScreeen from "../screens/Authentication/SetPasscodeScreen";
import SetPasswordScreeen from "../screens/Authentication/SetPasswordScreen";
import InformationScreen from "../screens/Authentication/InformationScreen";
import EnableBiometricsScreen from "../screens/Onboarding/EnableBiometricsScreen";

type current = {
  progress: Animated.AnimatedInterpolation<number>;
};

type layouts = {
  screen: {
    width: number;
    height: number;
  };
};

const screenOptions = {
  headerShown: false,
  cardStyleInterpolator: ({
    current,
    layouts,
  }: {
    current: current;
    layouts: layouts;
  }) => ({
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          }),
        },
      ],
    },
  }),
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SplashIntroScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
      <Stack.Screen name="SetPasscodeScreen" component={SetPasscodeScreeen} />
      <Stack.Screen name="SetPasswordScreen" component={SetPasswordScreeen} />
      <Stack.Screen name="InformationScreen" component={InformationScreen} />
      <Stack.Screen
        name="EnableBiometricsScreen"
        component={EnableBiometricsScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
