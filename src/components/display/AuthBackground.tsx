import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "../../constants/colors";

const AuthBackground = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.light_background }]}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default AuthBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
