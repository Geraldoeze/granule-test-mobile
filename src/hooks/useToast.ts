import { useState, useRef } from "react";
import { Animated, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
// const MODAL_HEIGHT = SCREEN_HEIGHT * 0.4;
const MODAL_HEIGHT = 350;

export const useToast = () => {
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(MODAL_HEIGHT)).current;

  const showToast = () => {
    setVisible(true);
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 8,
      speed: 12,
    }).start();
  };

  const hideToast = () => {
    Animated.timing(slideAnim, {
      toValue: MODAL_HEIGHT,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  return { visible, slideAnim, showToast, hideToast };
};
