import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// screen
import OnboardingStack from "./OnboardingStack";

// ui
import SplashLoading from "../components/display/SplashLoading";

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
  SplashIntroScreen: undefined;
  ForgotPasswordScreen: undefined;
  VerifyScreen: {
    previous_screen: string;
  };
  SetPasscodeScreen: undefined;
  SetPasswordScreen: undefined;
};

export function useAppNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}

const MainStack = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return isSplashVisible ? <SplashLoading /> : <OnboardingStack />;
};

export default MainStack;
