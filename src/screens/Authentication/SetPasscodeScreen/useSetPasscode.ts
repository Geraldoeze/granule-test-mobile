import { Animated } from "react-native";
import { showFlashMessage } from "../../../utils/flash-message";
import { useMutation } from "@tanstack/react-query";
import { AuthSignUpProps } from "../../../interface/authenticattion";
import { apiSignUpUser } from "../../../api/authentication";
import { getFirstErrorMessage } from "../../../utils/sub-functions";

const MODAL_HEIGHT = 400; // Example value

type slideAnimType = Animated.Value;
type setVisibleType = (value: React.SetStateAction<boolean>) => void;

const useSetPasscode = () => {
  const showToast = (setVisible: setVisibleType, slideAnim: slideAnimType) => {
    setVisible(true);
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 8,
      speed: 12,
    }).start();
  };

  const hideToast = (setVisible: setVisibleType, slideAnim: slideAnimType) => {
    Animated.timing(slideAnim, {
      toValue: MODAL_HEIGHT,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

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
    hideToast,
    showToast,
    mutation,
  };
};

export default useSetPasscode;
