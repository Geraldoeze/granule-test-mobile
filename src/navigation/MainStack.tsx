import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//
import FlashMessage from "react-native-flash-message";

// screen
import AuthenticationStack from "./AuthenticationStack";

// ui
import SplashLoading from "../components/display/SplashLoading";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import DashboardStackScreen from "./DashboardStack";

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
  InformationScreen: undefined;
  EnableBiometricsScreen: undefined;
  VerifyInformation: undefined;
  BiometricsLoginScreen: undefined;
};

export function useAppNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}


const MainStack = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const { top } = useSafeAreaInsets();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Example: fetch authentication state
const isAuthenticated = true
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return isSplashVisible ? (
    <SplashLoading />
  ) : (
    <>
      {isAuthenticated ? (
        <DashboardStackScreen /> // Show main app stack if authenticated
      ) : (
        <AuthenticationStack /> // Show authentication stack if not authenticated
      )}
      <FlashMessage position="top" />
    </>
  );
};

export default MainStack;
