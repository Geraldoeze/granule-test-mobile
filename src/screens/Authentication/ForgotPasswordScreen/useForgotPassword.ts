import { Linking } from "react-native";
import { useMutation } from "@tanstack/react-query";

import {
  apiFogotPassword,
  apiRequestVerifyAccount,
} from "../../../api/authentication";
import { RequestVerifyAccount } from "../../../interface/authenticattion";
import { showFlashMessage } from "../../../utils/flash-message";
import { useAppNavigation } from "../../../navigation/MainStack";

const useForgotPassword = () => {
  const navigation = useAppNavigation();

  const mutation = useMutation({
    mutationFn: (value: string) => apiFogotPassword(value),
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
        console.log(data.data);
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
        description: "Server error",
        type: "danger",
      });
    },
  });

  return { mutation };
};

export default useForgotPassword;
