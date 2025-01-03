import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// screen
import AuthenticationStack from "./AuthenticationStack";

// ui
import SplashLoading from "../components/display/SplashLoading";
import Toastable from "react-native-toastable";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
};

export function useAppNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}

const MainStack = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const { top } = useSafeAreaInsets();

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
      <AuthenticationStack />
      <Toastable
        statusMap={{
          success: "green",
          danger: "red",
          warning: "yellow",
          info: "blue",
        }}
        offset={top}
      />
    </>
  );
};

export default MainStack;
