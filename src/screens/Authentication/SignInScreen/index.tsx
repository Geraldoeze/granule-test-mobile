import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput, IconButton } from "@react-native-material/core";
import PrimaryButton from "../../../components/display/PrimaryButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthBackground from "../../../components/display/AuthBackground";
import styles from "./style";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthPasswordInput from "../../../components/display/AuthPasswordInput";

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
            borderRadius: 20,
          
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
