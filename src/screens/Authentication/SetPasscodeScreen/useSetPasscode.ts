import { Animated } from "react-native";

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

  return {
    hideToast,
    showToast,
  };
};

export default useSetPasscode;
