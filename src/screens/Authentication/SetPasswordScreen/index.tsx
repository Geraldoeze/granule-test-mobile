import React, { useState } from "react";
import { Text, View } from "react-native";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput, IconButton } from "@react-native-material/core";
import PrimaryButton from "../../../components/display/PrimaryButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthBackground from "../../../components/display/AuthBackground";
import styles from "./style";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import AuthPasswordInput from "../../../components/display/AuthPasswordInput";

const SetPasswordScreeen = () => {
  const navigation = useAppNavigation();
  const theme = useTheme();
  const [show_password, setShow_password] = useState(false);
  return (
    <AuthBackground>
      <AuthBackBtn onpress={() => navigation.goBack()} />

      <View style={styles.backCover}>
        <Text style={[styles.text, { color: Colors.light.auth_text1 }]}>
          Set new password
        </Text>
        <Text style={[styles.text1, { color: Colors.light.auth_text2 }]}>
          Enter your new password
        </Text>
        <AuthPasswordInput label="Password" />
        <AuthPasswordInput label="Retype Password" />

        <PrimaryButton
          onPress={() => {}}
          button_title={"Reset Password"}
          container_style={{
            borderRadius: 20,
            width: "100%",
            height: 70,
            marginVertical: 10,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
      </View>
    </AuthBackground>
  );
};

export default SetPasswordScreeen;
