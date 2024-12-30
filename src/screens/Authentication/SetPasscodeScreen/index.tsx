import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput, IconButton } from "@react-native-material/core";
import PrimaryButton from "../../../components/display/PrimaryButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthBackground from "../../../components/display/AuthBackground";
import styles from "./style";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import Passcode from "../../../components/display/Passcode";

const SetPasscodeScreeen = () => {
  const navigation = useAppNavigation();
  const theme = useTheme();
  const [show_password, setShow_password] = useState(false);
  return (
    <AuthBackground>
      <AuthBackBtn onpress={() => navigation.goBack()} />

      <View style={styles.backCover}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Set your Passcode
        </Text>
        <Text style={[styles.text1, { color: theme.auth_text2 }]}>
          Enter a 6 digit passcode
        </Text>
        <Passcode onPinComplete={() => {}} label="Set passcode" />
        <Passcode onPinComplete={() => {}} label="Re-Enter passcode" />

        <PrimaryButton
          onPress={() => {}}
          button_title={"Confirm"}
          container_style={{
            borderRadius: 20,
            width: "100%",
            height: 70,
            marginVertical: 20,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
      </View>
    </AuthBackground>
  );
};

export default SetPasscodeScreeen;
