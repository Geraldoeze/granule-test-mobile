// React and React Native imports
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

// Third-party libraries
import { TextInput, IconButton } from "@react-native-material/core";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

// Project constants
import { Colors } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";

// Styles
import styles from "./style";

import { showFlashMessage } from "../../../utils/flash-message";
import { ActivityIndicator } from "react-native";

// Function
import useForgotPassword from "./useForgotPassword";
import { updateAuthenticationData } from "../../../store/signup/slice";

const ForgotPasswordScreen = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState("");
  const { mutation } = useForgotPassword();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(email);
    if (!email) {
      showFlashMessage({
        message: "Error",
        description: "Please enter your email",
        type: "danger",
      });
      return;
    }
    mutation.mutate(email, {
      onSuccess: (data) => {
        if (data.status === 200) {
          const result = dispatch(
            updateAuthenticationData({
              token: data?.data?.data?.token,
              email: email,
            })
          );
          console.log("Dispatchresult:", result);
          navigation.navigate("VerifyScreen", {
            previous_screen: "ForgotPasswordScreen",
          });
        }
      },
    });
  };
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
            value={email}
            onChangeText={setEmail}
            color={Colors.general.primary}
            inputStyle={styles.inputStyle}
            trailing={
              <IconButton
                icon={(props) => (
                  <Ionicons
                    name={"close-circle-outline"}
                    size={24}
                    color={"#2F3233"}
                  />
                )}
                onPress={() => setEmail("")}
              />
            }
          />
        </View>

        <PrimaryButton
          onPress={handleSubmit}
          button_title={"Continue"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
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
