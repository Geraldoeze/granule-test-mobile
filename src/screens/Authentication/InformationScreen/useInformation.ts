import { Animated } from "react-native";
import { showFlashMessage } from "../../../utils/flash-message";
import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "../../../store/signup/slice";
import { useAppNavigation } from "../../../navigation/MainStack";

const MODAL_HEIGHT = 300; // Example value

type slideAnimType = Animated.Value;
type setVisibleType = (value: React.SetStateAction<boolean>) => void;

const useInformation = () => {
  const dispatch = useDispatch();
  const navigation = useAppNavigation();
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
      duration: 400,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  const handleNext = (info: string, information: string) => {
    if (!info) {
      showFlashMessage({
        message: "Please enter ID information",
        description: "",
        type: "warning",
      });
      return;
    }

    dispatch(
      updatePersonalInfo({
        verification_id: info,
        verification_type: information.toLowerCase(),
      })
    );

    // navigation.navigate("VerifyInformation");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return {
    hideToast,
    showToast,
    handleNext,
    handleBack,
  };
};

export default useInformation;
