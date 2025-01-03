// utils/helpers.ts

import { Animated } from "react-native";
import { NavigationProp } from "@react-navigation/native";

/**
 * Handle navigation based on the previous screen.
 * @param previous_screen - The name of the previous screen.
 * @param navigation - The navigation object to handle screen transitions.
 * @param animation - The animated value for toast animation.
 * @param setVisible - A function to update visibility of the toast.
 */
/**
 * Hide a toast animation.
 * @param animation - The animated value controlling the toast position.
 * @param callback - Optional callback to execute after hiding.
 */
/**
 * Format input by adding dashes after each digit.
 * @param value - The input string to format.
 * @returns A formatted string with dashes.
 */
/**
 * Show a toast animation.
 * @param animation - The animated value controlling the toast position.
 */

const useVerify = () => {
  const formatInput = (value: string): string => {
    const digitsOnly = value.replace(/\D/g, ""); // Remove all non-digit characters
    return digitsOnly.split("").slice(0, 6).join("-"); // Add dashes after digits
  };

  const showToast = (animation: Animated.Value): void => {
    Animated.timing(animation, {
      toValue: 0, // Move to screen bottom
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const hideToast = (
    animation: Animated.Value,
    callback?: () => void
  ): void => {
    Animated.timing(animation, {
      toValue: 200, // Move off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (callback) callback(); // Execute the callback after hiding
    });
  };
  const handleNavigation = (
    previous_screen: string,
    navigation: NavigationProp<any>,
    animation: Animated.Value,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (previous_screen === "SignInScreen") {
      setVisible(true);
      showToast(animation);
    } else if (previous_screen === "SignUpScreen") {
      navigation.navigate("SetPasscodeScreen");
    } else if (previous_screen === "ForgotPasswordScreen") {
      navigation.navigate("SetPasswordScreen");
    }
  };

  return {
    hideToast,
    showToast,
    formatInput,
    handleNavigation,
  };
};

export default useVerify;
