import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "../../constants/colors";

const DashboardBackground = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.background }]}
      testID="container"
    >
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default DashboardBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
