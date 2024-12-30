import React, { useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../../constants/colors";
import { TextInput, IconButton } from "@react-native-material/core";
import PrimaryButton from "../../../components/display/PrimaryButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthBackground from "../../../components/display/AuthBackground";
import styles from "./style";

import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";

const SignUpScreen = () => {
  const navigation = useAppNavigation();

  const handleTermsPress = () => {
    Linking.openURL("https://granule.com/terms");
  };

  const handlePrivacyPress = () => {
    Linking.openURL("https://granule.com/privacy");
  };

  return (
    <AuthBackground>
      <AuthBackBtn onpress={() => navigation.navigate("SignInScreen")} />

      <View style={styles.backCover}>
        <Text style={[styles.text, { color: Colors.light.auth_text1 }]}>
          Enter your email
        </Text>
        <Text style={[styles.text1, { color: Colors.light.auth_text2 }]}>
          enter the email you want to use for this account.
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
            Email
          </Text>
          <TextInput
            variant="standard"
            label=""
            color={Colors.general.primary}
            style={{}}
            trailing={
              <IconButton
                icon={(props) => (
                  <Ionicons
                    name={"close-circle-outline"}
                    size={24}
                    color={"#2F3233"}
                  />
                )}
                onPress={() => {}}
              />
            }
          />
        </View>

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
        <PrimaryButton
           onPress={() =>
            navigation.navigate("VerifyScreen", {
              previous_screen: "SignUpScreen",
            })
          }
          button_title={"Continue"}
          container_style={{
            borderRadius: 20,
            width: "100%",
            height: 70,
            marginVertical: 30,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
        <View style={{}}>
          <Text
            style={[
              styles.text4,
              { lineHeight: 20, fontSize: 14, color: Colors.light.auth_text2 },
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
