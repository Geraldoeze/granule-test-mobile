// React and React Native imports
import React, { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { IconButton, TextInput } from "@react-native-material/core";

// Third-party libraries
import Ionicons from "react-native-vector-icons/Ionicons";

// Project constants
import { Colors, useTheme } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import { useAppNavigation } from "../../../navigation/MainStack";

// Styles
import styles from "./style";

// utils
import { showFlashMessage } from "../../../utils/flash-message";
import useSignUp from "./useSignUp";

const SignUpScreen = () => {
  const navigation = useAppNavigation();
  const theme = useTheme();

  const [info, setInfo] = useState({
    email: "",
    referral_code: "",
  });
  const [showReferral, setShowReferral] = useState(false);
  const { handleTermsPress, handlePrivacyPress, mutation } = useSignUp();

  const handleSubmit = () => {
    if (!info.email) {
      showFlashMessage({
        message: "Error",
        description: "Please enter your email",
        type: "danger",
      });
      return;
    }
    mutation.mutate(info);
  };

  return (
    <AuthBackground>
      <AuthBackBtn onpress={() => navigation.navigate("SignInScreen")} />

      <View style={styles.backCover}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Enter your email
        </Text>
        <Text style={[styles.text1, { color: theme.auth_text2 }]}>
          enter the email you want to use for this account.
        </Text>
        <View style={styles.inputCover}>
          <Text
            style={[
              styles.text2,
              {
                color: theme.label,
              },
            ]}
          >
            Email
          </Text>
          <TextInput
            variant="standard"
            label=""
            color={Colors.general.primary}
            inputStyle={styles.inputStyle}
            value={info.email}
            onChangeText={(email) =>
              setInfo((prev) => ({ ...prev, email: email }))
            }
            trailing={
              <IconButton
                icon={(props) => (
                  <Ionicons
                    name={"close-circle-outline"}
                    size={24}
                    color={"#2F3233"}
                  />
                )}
                onPress={() => setInfo((prev) => ({ ...prev, email: "" }))}
              />
            }
          />
        </View>
        {showReferral && (
          <View style={styles.inputCover}>
            <Text
              style={[
                styles.text2,
                {
                  color: theme.label,
                },
              ]}
            >
              Referral code
            </Text>
            <TextInput
              variant="standard"
              label=""
              color={Colors.general.primary}
              inputStyle={styles.inputStyle}
              value={info.referral_code}
              onChangeText={(code) =>
                setInfo((prev) => ({ ...prev, referral_code: code }))
              }
            />
          </View>
        )}

        <Pressable onPress={() => setShowReferral(!showReferral)}>
          <Text
            style={[
              styles.text3,
              {
                color: Colors.light.auth_text3,
              },
            ]}
          >
            Referral Code
          </Text>
        </Pressable>
        <PrimaryButton
          onPress={handleSubmit}
          button_title={"Continue"}
          container_style={{
            borderRadius: 16,
            marginVertical: 20,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
        <View>
          {mutation.isPending && (
            <ActivityIndicator
              style={{ marginBottom: 10, alignSelf: "center" }}
              color={Colors.general.primary}
              size="small"
            />
          )}
        </View>
        <View style={{}}>
          <Text
            style={[
              styles.text4,
              { lineHeight: 20, fontSize: 14, color: theme.auth_text2 },
            ]}
          >
            {" "}
            {/* Add lineHeight to parent Text */}
            By clicking on "Continue", you agree to Granule's{" "}
            <Text // Changed from TouchableOpacity to Text
              onPress={handleTermsPress}
              style={{
                color: Colors.general.primary,
              }}
            >
              Terms and Conditions
            </Text>{" "}
            and{" "}
            <Text // Changed from TouchableOpacity to Text
              onPress={handlePrivacyPress}
              style={{
                color: Colors.general.primary,
              }}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </AuthBackground>
  );
};

export default SignUpScreen;

// const styles = StyleSheet.create({
//   backText: {},
//   text1: { fontFamily: "Outfit Bold", fontSize: 40 },
//   text2: { fontFamily: "Outfit Regular", fontSize: 18 },
// });
