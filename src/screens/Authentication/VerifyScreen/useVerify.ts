// utils/helpers.ts

import { Animated } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { showFlashMessage } from "../../../utils/flash-message";
import {
  VerifyAccountProps,
  VerifyOtpProps,
} from "../../../interface/authenticattion";
import { apiVerifyAccount, apiVerifyOtp } from "../../../api/authentication";
import { useAppNavigation } from "../../../navigation/MainStack";
import { useDispatch } from "react-redux";
import { updateAuthenticationData } from "../../../store/signup/slice";

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
  const navigation = useAppNavigation();
  const dispatch = useDispatch();
  const formatInput = (value: string): string => {
    const digitsOnly = value.replace(/\D/g, ""); // Remove all non-digit characters
    return digitsOnly.split("").slice(0, 6).join("-"); // Add dashes after digits
  };

  const showToast = (animation: Animated.Value, navigation: any): void => {
    // Show the toast with animation
    Animated.timing(animation, {
      toValue: 0, // Move to screen bottom
      duration: 400,
      useNativeDriver: true,
    }).start(() => {});
  };

  const hideToast = (
    animation: Animated.Value,
    callback?: () => void
  ): void => {
    // Hide the toast with animation
    Animated.timing(animation, {
      toValue: 200, // Move off-screen
      duration: 400,
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
    } else if (previous_screen === "SignUpScreen") {
      // open modal
      setVisible(true);
      showToast(animation, navigation);
    } else if (previous_screen === "ForgotPasswordScreen") {
      navigation.navigate("SetPasswordScreen");
    }
  };

  const verifyOtpMutation = useMutation({
    mutationFn: (values: VerifyOtpProps) => apiVerifyOtp(values),
    onSuccess: (data) => {
      if (data?.status === "error") {
        if ("msg" in data) {
          showFlashMessage({
            message: "Request failed",
            description: data.msg || "An error occurred",
            type: "danger",
          });
          return;
        }
        return;
      }
      if (data.status === 200) {
        showFlashMessage({
          message: "Success",
          description: data?.data?.message || "",
          type: "success",
        });
        const result = dispatch(
          updateAuthenticationData({
            otp: data?.data?.data?.otp,
          })
        );
        console.log("Dispatchresult:", result);
        navigation.navigate("SetPasswordScreen");
      }
    },
    onError: () => {
      showFlashMessage({
        message: "Request failed",
        description: "An error occurred",
        type: "danger",
      });
    },
  });

  const verifyAccountMutation = useMutation({
    mutationFn: (values: VerifyAccountProps) => apiVerifyAccount(values),
    onSuccess: (data) => {
      if (data?.status === "error") {
        if ("msg" in data) {
          showFlashMessage({
            message: "Request failed",
            description: data.msg || "An error occurred",
            type: "danger",
          });
          return;
        }
        return;
      }
      if (data.status === 200) {
        showFlashMessage({
          message: "Success",
          description: data?.data?.message || "",
          type: "success",
        });
      }
    },
    onError: () => {
      showFlashMessage({
        message: "Request failed",
        description: "An error occurred",
        type: "danger",
      });
    },
  });

  return {
    hideToast,
    showToast,
    formatInput,
    handleNavigation,
    verifyAccountMutation,
    verifyOtpMutation,
  };
};

export default useVerify;
