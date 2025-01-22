// React and React Native imports
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TextInput } from "@react-native-material/core";

// Project constants
import { Colors, useTheme } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthPasswordInput from "../../../components/display/AuthPasswordInput";
import BrandLogo from "../../../../assets/icons/brand-logo.svg";

// Styles
import styles from "./style";

//
import useSignIn from "./useSignIn";
import { showFlashMessage } from "../../../utils/flash-message";
import { ActivityIndicator } from "react-native";
import SecureAuthStorage from "../../../utils/auth-storage";

const SignInScreen = () => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const { mutation, handleSuccessfulLogin } = useSignIn();
  const [auth, setAuth] = useState({
    email: "",
    passcode: "",
  });

  // In your component:
  const checkStoredEmail = async () => {
    const email = await SecureAuthStorage.getEmail();
    if (email) {
      // Use the email (e.g., pre-fill the email field)
      setAuth((prev) => ({ ...prev, email: email }));
    }
  };

  // Call this in useEffect if you want to check on component mount
  useEffect(() => {
    checkStoredEmail();
  }, []);

  const handleLogin = () => {
    if (!auth.email || !auth.passcode) {
      showFlashMessage({
        message: "Error",
        description: "Please enter your email and password",
        type: "danger",
      });
      return;
    }
    mutation.mutate(auth, {
      onSuccess: (data) => {
        if (data.status === 200) {
          handleSuccessfulLogin(auth.email, auth.passcode);
        }
      },
    });
  };
  return (
    <AuthBackground>
      <View style={styles.logoCover}>
        <BrandLogo />
      </View>

      <View style={styles.content}>
        <View style={styles.inputCover}>
          <Text style={[styles.text, { color: theme.primary }]}>Email</Text>
          <TextInput
            variant="standard"
            label=""
            value={auth.email}
            onChangeText={(email) => setAuth((prev) => ({ ...prev, email }))}
            color={Colors.general.primary}
            inputStyle={styles.inputStyle}
          />
        </View>
        <AuthPasswordInput
          value={auth.passcode}
          onChangeText={(passcode) =>
            setAuth((prev) => ({ ...prev, passcode }))
          }
          label="Password"
        />
        <Pressable onPress={() => navigation.navigate("ForgotPasswordScreen")}>
          <Text style={[styles.text1, { color: theme.dark }]}>
            Forgot your Passcode?
          </Text>
        </Pressable>
        <PrimaryButton
          onPress={handleLogin}
          button_title={"Login"}
          container_style={{
            borderRadius: 16,
            marginVertical: 30,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
        {mutation.isPending && (
          <ActivityIndicator
            style={{ marginBottom: 10, alignSelf: "center" }}
            color={Colors.general.primary}
            size="small"
          />
        )}
        <View style={styles.bottomTextCover}>
          <Text
            style={[
              styles.text2,
              {
                color: Colors.general.dark,
              },
            ]}
          >
            Don’t have an account?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
            <Text
              style={[
                styles.text3,
                {
                  color: Colors.general.primary,
                },
              ]}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </AuthBackground>
  );
};

export default SignInScreen;
