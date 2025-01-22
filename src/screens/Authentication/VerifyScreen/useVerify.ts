// utils/helpers.ts

import { Animated } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { showFlashMessage } from "../../../utils/flash-message";
import {
  VerifyAccountProps,
  VerifyOtpProps,
} from "../../../interface/authenticattion";
import {
  apiFogotPassword,
  apiResendVerification,
  apiVerifyAccount,
  apiVerifyOtp,
} from "../../../api/authentication";
import { useAppNavigation } from "../../../navigation/MainStack";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthenticationData } from "../../../store/signup/slice";
import { selectAuthenticatData } from "../../../store/signup/selectors";

/**
 * Handle navigation based on the previous screen.
 * @param previous_screen - The name of the previous screen.
 * @param navigation - The navigation object to handle screen transitions.
 * @param animation - The animated value for toast animation.
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
  const authenticatData = useSelector(selectAuthenticatData);
  const dispatch = useDispatch();

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

  const handleResend = async (
    previous_screen: string,
    canResend: boolean,
    setCanResend: React.Dispatch<React.SetStateAction<boolean>>,
    setCountdown: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (canResend) {
      // Your resend logic here
      let resend;
      if (previous_screen === "SignUpScreen") {
        resend = await apiResendVerification(authenticatData?.email.toString());
        if (resend.status === 200) {
          showFlashMessage({
            message: "Success",
            description: resend.data.message,
            type: "success",
          });
        }
      } else if (previous_screen === "ForgotPasswordScreen") {
        resend = await apiFogotPassword(authenticatData?.email.toString());
        if (resend.status === 200) {
          showFlashMessage({
            message: "Success",
            description: resend.data.message,
            type: "success",
          });
          const result = dispatch(
            updateAuthenticationData({
              token: resend?.data?.data?.token,
            })
          );
          console.log("Dispatchresult:", result);
        }
      }

      setCountdown(120); // Reset countdown
      setCanResend(false);
    }
  };

  return {
    
    handleResend,
    verifyAccountMutation,
    verifyOtpMutation,
  };
};

export default useVerify;
