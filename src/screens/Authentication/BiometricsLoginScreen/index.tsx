import React, { useState } from "react";
import { Image, Text, View, Alert, Button } from "react-native";
import { Colors } from "../../../constants/colors";
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import styles from "./styles";
import SecureAuthStorage from "../../../utils/auth-storage";
import { showFlashMessage } from "../../../utils/flash-message";

const BiometricsLoginScreen = () => {
  const navigation = useAppNavigation();
  const [isProcessing, setIsProcessing] = useState(false);
  const handleRetrieveCredentials = async () => {
    try {
      // First check if biometrics is available
      const result = await SecureAuthStorage.isBiometricsAvailable();
      if (!result.available) {
        Alert.alert(
          "Biometrics Not Enabled",
          "Please enable biometrics to access credentials."
        );
        return;
      }

      // If biometrics is available, get the stored credentials
      const credentials = await SecureAuthStorage.getStoredCredentials();

      if (credentials) {
        console.log("Successfully retrieved credentials:", credentials);
        // Here you can use the credentials as needed
        return credentials;
      } else {
        Alert.alert("No Credentials", "No stored credentials were found.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving credentials:", error);
      Alert.alert(
        "Error",
        "An error occurred while retrieving your credentials."
      );
      return null;
    }
  };

  const getCredentials = () => {
    const data = handleRetrieveCredentials();
    console.log(data);
  };

  return (
    <AuthBackground>
      <View style={styles.cover}>
        <AuthBackBtn onpress={() => navigation.navigate("SignInScreen")} />
        <Button title="Retrieve Credentials" onPress={getCredentials} />
        <View style={styles.bottomCover}>
          <Image
            source={require("../../../../assets/icons/finger-print.png")}
            style={{ width: 66, height: 66, marginBottom: 10 }}
          />
          {/* <Text style={[styles.text, { color: Colors.light.auth_text1 }]}>
            Enable Biometrics login
          </Text>
          <Text style={[styles.text1, { color: Colors.light.auth_text2 }]}>
            Gain entry into your account with ease and precision.
          </Text> */}

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Protected Screen</Text>
          </View>
        </View>
      </View>
    </AuthBackground>
  );
};

export default BiometricsLoginScreen;
