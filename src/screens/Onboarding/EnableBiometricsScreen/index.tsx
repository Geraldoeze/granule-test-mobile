// React and React Native imports
import React, { useState } from "react";
import { Image, Text, View } from "react-native";

// Project constants
import { Colors } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";

// Styles
import styles from "./style";

const EnableBiometricsScreen = () => {
  const navigation = useAppNavigation();
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
            gain entry into your account with ease and precision.
          </Text>

          <PrimaryButton
            onPress={() => {}}
            button_title={"Verify"}
            container_style={{
              borderRadius: 16,
              marginVertical: 10,
              backgroundColor: Colors.general.primary,
            }}
            text_style={{ color: "white" }}
          />
        </View>
      </View>
    </AuthBackground>
  );
};

export default EnableBiometricsScreen;
