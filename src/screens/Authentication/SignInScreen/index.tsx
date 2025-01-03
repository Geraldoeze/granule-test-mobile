// React and React Native imports
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TextInput } from "@react-native-material/core";

// Project constants
import { Colors, useTheme } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthPasswordInput from "../../../components/display/AuthPasswordInput";

// Styles
import styles from "./style";


const SignInScreen = () => {
  const theme = useTheme();
  const navigation = useAppNavigation();
  return (
    <AuthBackground>
      <View style={styles.logoCover}>
        <Image
          source={require("../../../../assets/icons/logo-colored.png")}
          style={styles.logoStyles}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.inputCover}>
          <Text style={[styles.text, { color: theme.primary }]}>Email</Text>
          <TextInput
            variant="standard"
            label=""
            color={Colors.general.primary}
            style={{}}
          />
        </View>
        <AuthPasswordInput label="Password" />
        <Pressable onPress={() => navigation.navigate("ForgotPasswordScreen")}>
          <Text style={[styles.text1, { color: theme.dark }]}>
            Forgot your Passcode?
          </Text>
        </Pressable>
        <PrimaryButton
          onPress={() =>
            navigation.navigate("VerifyScreen", {
              previous_screen: "SignInScreen",
            })
          }
          button_title={"Login"}
          container_style={{
            borderRadius: 16,
            marginVertical: 30,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
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
