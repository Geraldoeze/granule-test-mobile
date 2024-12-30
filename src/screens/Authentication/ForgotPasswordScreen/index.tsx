import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../../constants/colors";
import { TextInput, IconButton } from "@react-native-material/core";
import PrimaryButton from "../../../components/display/PrimaryButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthBackground from "../../../components/display/AuthBackground";
import styles from "./style";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";

const ForgotPasswordScreen = () => {
  const navigation = useAppNavigation();
  return (
    <AuthBackground>
      <AuthBackBtn onpress={() => navigation.navigate("SignInScreen")} />

      <View style={styles.backCover}>
        <Text style={[styles.text, { color: Colors.light.auth_text1 }]}>
          Lost your passcode?
        </Text>
        <Text style={[styles.text1, { color: Colors.light.auth_text2 }]}>
          Don’t worry, we’ve got you! enter email linked to your account.
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

        <PrimaryButton
           onPress={() =>
            navigation.navigate("VerifyScreen", {
              previous_screen: "ForgotPasswordScreen",
            })
          }
          button_title={"Continue"}
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

export default ForgotPasswordScreen;

// const styles = StyleSheet.create({
//   backText: {},
//   text1: { fontFamily: "Outfit Bold", fontSize: 40 },
//   text2: { fontFamily: "Outfit Regular", fontSize: 18 },
// });
