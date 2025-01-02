import React from "react";
import { View, StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Colors, useTheme } from "../../constants/colors";
import { Text } from "@react-native-material/core";

interface PasscodeProps {
  onPinComplete: (pin: string) => void;
  label: string;
}

const Passcode: React.FC<PasscodeProps> = ({ onPinComplete, label }) => {
  const theme = useTheme();

  return (
    <View style={styles.cover}>
      <Text style={[styles.text, { color: theme.primary }]}>{label}</Text>
      <View style={styles.container}>
        <OtpInput
          numberOfDigits={6}
          focusColor="#EC0C270D"
          type="numeric"
          focusStickBlinkingDuration={500}
          secureTextEntry={true}
          onFilled={(text) => onPinComplete(text)}
          textInputProps={{
            accessibilityLabel: "Set passcode",
          }}
          theme={{
            containerStyle: styles.container,
            pinCodeContainerStyle: styles.inputContainer,
            pinCodeTextStyle: styles.text,
            focusedPinCodeContainerStyle: styles.focus,
            filledPinCodeContainerStyle: styles.focusedValue,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    marginVertical: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 4,
  },
  inputContainer: {
    width: 47,
    height: 55,
    marginHorizontal: 2,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.general.primary,
  },
  focus: {
    backgroundColor: "#EC0C270D",
    color: Colors.general.primary,
  },
  focusedValue: {
    backgroundColor: "#EC0C270D",
    color: Colors.general.primary,
  },
  text: {
    fontSize: 18,
    fontFamily: "Outfit Medium",
    marginBottom: 10,
    color: Colors.general.primary,
  },
});

export default Passcode;
