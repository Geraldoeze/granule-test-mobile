import { Linking } from "react-native";
import { useMutation } from "@tanstack/react-query";

import { apiLoginUser } from "../../../api/authentication";
import { AuthProps } from "../../../interface/authenticattion";
import { showFlashMessage } from "../../../utils/flash-message";
import { useAppNavigation } from "../../../navigation/MainStack";
import { useDispatch } from "react-redux";
import { updateAuthenticationData } from "../../../store/signup/slice";
import { selectAuthenticatData } from "../../../store/signup/selectors";

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
        navigation.navigate("EnableBiometricsScreen");
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

  return { mutation };
};

export default useSignIn;
