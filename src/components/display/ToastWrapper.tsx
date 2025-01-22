import React from "react";
import { Animated, StyleSheet, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface ToastWrapperProps {
  children: React.ReactNode;
  visible: boolean;
  slideAnim: Animated.Value;
}

export const ToastWrapper: React.FC<ToastWrapperProps> = ({
  children,
  visible,
  slideAnim,
}) => {
  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F7F7FC",
    width: width,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 20,
  },
});
