import { Linking } from "react-native";
import { useMutation } from "@tanstack/react-query";

import { apiLoginUser } from "../../../api/authentication";
import { AuthProps } from "../../../interface/authenticattion";
import { showFlashMessage } from "../../../utils/flash-message";
import { useAppNavigation } from "../../../navigation/MainStack";
import SecureAuthStorage from "../../../utils/auth-storage";
import { useDispatch } from "react-redux";
import { updateAuthenticationData } from "../../../store/signup/slice";

const useSignIn = () => {
  const navigation = useAppNavigation();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (values: AuthProps) => apiLoginUser(values),
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
          description: "",
          type: "success",
        });
        // check if it's a  first time user
        // handleSuccessfulLogin()
      }
    },
    onError: () => {
      showFlashMessage({
        message: "Request failed",
        description: "Server error",
        type: "danger",
      });
    },
  });

  const handleSuccessfulLogin = async (email: string, password: string) => {
    dispatch(
      updateAuthenticationData({
        passcode: password,
        email: email,
      })
    );
    try {
      const isFirstTime = false;
      if (isFirstTime) {
        navigation.navigate("EnableBiometricsScreen");
      } else {
        navigation.navigate("EnableBiometricsScreen");
      }
    } catch (error) {
      console.error("Error storing credentials:", error);
      showFlashMessage({
        message: "Error storing credentials",
        description: "An error occurred",
        type: "danger",
      });
    }
  };

  return { mutation, handleSuccessfulLogin };
};

export default useSignIn;
