import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput } from "@react-native-material/core";
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import styles from "./style";
import {
  RootStackParamList,
  useAppNavigation,
} from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type VerifyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyScreen"
>;

const VerifyScreen: React.FC<VerifyScreenProps> = ({ route }) => {
  const { previous_screen } = route.params;

  const navigation = useAppNavigation();
  const theme = useTheme();

  const handle_navigation = () => {
    if (previous_screen === "SignInScreen") {
    }
    if (previous_screen === "SignUpScreen") {
      navigation.navigate("SetPasscodeScreen");
    }
    if (previous_screen === "ForgotPasswordScreen") {
      navigation.navigate("SetPasswordScreen");
    }
  };

  const [input_value, setInput_value] = useState("");

  // Format the input by adding dashes after each digit
  const formatInput = (value: string) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "");
    // Add dashes after every digit, but limit to 4 digits
    return digitsOnly.split("").slice(0, 6e4).join("-");
  };

  // Handle text change
  const handleInputChange = (value: string) => {
    const formatted = formatInput(value);
    setInput_value(formatted);
  };

  // Handle paste (not directly applicable in React Native)
  const handlePaste = (event: any) => {
    // React Native doesn't have `onPaste` directly, but you can handle this if using a library like `react-native-clipboard`
    // Or process pasted text using other inputs
  };

  return (
    <AuthBackground>
      <AuthBackBtn onpress={() => navigation.goBack()} />

      <View style={styles.backCover}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Verify account
        </Text>
        <Text style={[styles.text1, { color: theme.auth_text2 }]}>
          OTP have been sent to{" "}
          <Text style={[styles.text1, { color: theme.dark }]}>
            Josephdesign@demo.com
          </Text>
        </Text>
        <View style={styles.inputCover}>
          <Text
            style={[
              styles.text2,
              {
                color: Colors.general.primary,
              },
            ]}
          >
            OTP
          </Text>
          <TextInput
            variant="standard"
            label=""
            value={input_value}
            onChangeText={handleInputChange}
            keyboardType="numeric"
            placeholder="0 - 0 - 0 - 0 - 0 - 0"
            color={Colors.general.primary}
            inputStyle={styles.inputStyle}
          />
        </View>

        <View style={styles.bottomTextCover}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={[styles.text3, { color: theme.primary }]}>
              Change email
            </Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.text4, { color: theme.auth_text3 }]}>
              Resend OTP
            </Text>
          </Pressable>
        </View>
        <PrimaryButton
          onPress={handle_navigation}
          button_title={"Verify"}
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

export default VerifyScreen;

// const styles = StyleSheet.create({
//   backText: {},
//   text1: { fontFamily: "Outfit Bold", fontSize: 40 },
//   text2: { fontFamily: "Outfit Regular", fontSize: 18 },
// });
