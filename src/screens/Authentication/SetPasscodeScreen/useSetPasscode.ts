import { showFlashMessage } from "../../../utils/flash-message";
import { useMutation } from "@tanstack/react-query";
import { AuthSignUpProps } from "../../../interface/authenticattion";
import { apiSignUpUser } from "../../../api/authentication";
import { getFirstErrorMessage } from "../../../utils/sub-functions";

const useSetPasscode = () => {
  const mutation = useMutation({
    mutationFn: (values: AuthSignUpProps) => apiSignUpUser(values),
    onSuccess: (data) => {
      if (data?.status === "error") {
        if ("msg" in data) {
          showFlashMessage({
            message: data?.msg,
            description: getFirstErrorMessage(data.errors),
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

        // navigation.navigate("VerifyScreen", {
        //   previous_screen: "SignUpScreen",
        // });
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

  return {
    mutation,
  };
};

export default useSetPasscode;
