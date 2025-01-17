import { Linking } from "react-native";
import { useMutation } from "@tanstack/react-query";

import { apiRequestVerifyAccount } from "../../../api/authentication";
import { RequestVerifyAccount } from "../../../interface/authenticattion";
import { showFlashMessage } from "../../../utils/flash-message";
import { useAppNavigation } from "../../../navigation/MainStack";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthenticationData } from "../../../store/signup/slice";
import { selectAuthenticatData } from "../../../store/signup/selectors";

const useSignUp = () => {
  const navigation = useAppNavigation();
  const dispatch = useDispatch();

  const handleTermsPress = () => {
    Linking.openURL("https://granule.com/terms");
  };

  const handlePrivacyPress = () => {
    Linking.openURL("https://granule.com/privacy");
  };

  const mutation = useMutation({
    mutationFn: (values: RequestVerifyAccount) =>
      apiRequestVerifyAccount(values),
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
            token: data?.data?.data?.token,
            email: data?.data?.data?.email,
          })
        );
        console.log("Dispatchresult:", result);
        navigation.navigate("VerifyScreen", {
          previous_screen: "SignUpScreen",
        });
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

  return { handleTermsPress, handlePrivacyPress, mutation };
};

export default useSignUp;
