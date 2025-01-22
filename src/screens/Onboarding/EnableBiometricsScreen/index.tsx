import React, { useState } from "react";
import { Image, Text, View, Alert } from "react-native";
import { Colors } from "../../../constants/colors";
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import styles from "./style";
import SecureAuthStorage from "../../../utils/auth-storage";
import { showFlashMessage } from "../../../utils/flash-message";
import { useSelector } from "react-redux";
import { selectAuthenticatData } from "../../../store/signup/selectors";

const EnableBiometricsScreen = () => {
  const navigation = useAppNavigation();
  const [isProcessing, setIsProcessing] = useState(false);
  const authenticatData = useSelector(selectAuthenticatData);

  const handleEnableBiometrics = async () => {
    try {
      setIsProcessing(true); // Start processing

      // Check if biometrics is available
      const { available, biometryType } =
        await SecureAuthStorage.isBiometricsAvailable();
      const enrolled = await SecureAuthStorage.isBiometricsEnrolled();

      if (!available) {
        Alert.alert(
          "Biometrics Not Available",
          "Biometric authentication is not supported on this device."
        );
        return;
      }

      if (!enrolled) {
        Alert.alert(
          `Set up ${biometryType || "Biometrics"}`,
          `To use ${
            biometryType || "biometric authentication"
          }, you need to set it up in your device settings first.`
        );
        return;
      }

      // Attempt to verify biometrics
      const verified = await SecureAuthStorage.verifyBiometric();
      if (!verified) {
        showFlashMessage({
          message: "Authentication Failed",
          description: "Biometric verification was unsuccessful.",
          type: "danger",
        });
        return;
      }

      // Save credentials securely
      const email = authenticatData.email;
      const password = authenticatData.passcode;
      const credentialsSaved = await SecureAuthStorage.storeCredentials(
        email,
        password
      );
      if (credentialsSaved) {
        showFlashMessage({
          message: "Success",
          description:
            "Biometric authentication enabled and credentials saved securely.",
          type: "success",
        });
        navigation.navigate("BiometricsLoginScreen"); // Navigate to the next screen
      } else {
        showFlashMessage({
          message: "Error",
          description: "Failed to save credentials securely.",
          type: "danger",
        });
      }
    } catch (error) {
      console.error("Error enabling biometrics:", error);
      showFlashMessage({
        message: "Error",
        description:
          "An unexpected error occurred while setting up biometrics.",
        type: "danger",
      });
    } finally {
      setIsProcessing(false); // End processing
    }
  };

  return (
    <AuthBackground>
      <View style={styles.cover}>
        <AuthBackBtn onpress={() => navigation.navigate("SignInScreen")} />

        <View style={styles.bottomCover}>
          <Image
            source={require("../../../../assets/icons/finger-print.png")}
            style={{ width: 66, height: 66, marginBottom: 10 }}
          />
          <Text style={[styles.text, { color: Colors.light.auth_text1 }]}>
            Enable Biometrics login
          </Text>
          <Text style={[styles.text1, { color: Colors.light.auth_text2 }]}>
            Gain entry into your account with ease and precision.
          </Text>

          <PrimaryButton
            onPress={handleEnableBiometrics}
            button_title={isProcessing ? "Processing..." : "Verify"}
            container_style={{
              borderRadius: 16,
              marginVertical: 10,
              backgroundColor: isProcessing
                ? Colors.general.secondary
                : Colors.general.primary,
              opacity: isProcessing ? 0.7 : 1,
            }}
            text_style={{ color: "white" }}
            disabled={isProcessing} // Disable button while processing
          />
        </View>
      </View>
    </AuthBackground>
  );
};

export default EnableBiometricsScreen;
