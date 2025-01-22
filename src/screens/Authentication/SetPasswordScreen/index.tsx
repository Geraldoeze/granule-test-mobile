// React and React Native imports
import React, { useRef, useState } from "react";
import { Animated, Dimensions, Text, View } from "react-native";

// Third-party Libraries
import Icon from "react-native-vector-icons/Octicons";

// Project constants
import { Colors, useTheme } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";

// Styles
import styles from "./style";

// Functions
import useSetPassword from "./useSetPassword";
import Passcode from "../../../components/display/Passcode";
import { showFlashMessage } from "../../../utils/flash-message";
import { useSelector } from "react-redux";
import { selectAuthenticatData } from "../../../store/signup/selectors";
import { ActivityIndicator } from "react-native";
import { ToastWrapper } from "../../../components/display/ToastWrapper";
import { useToast } from "../../../hooks/useToast";

const SetPasswordScreeen = () => {
  const navigation = useAppNavigation();
  const theme = useTheme();
  const { visible, slideAnim, showToast, hideToast } = useToast();
  const authenticatData = useSelector(selectAuthenticatData);

  const [pin, setPin] = useState({
    passcode: "",
    reEnteredPasscode: "",
  });

  const { mutation } = useSetPassword();

  const handlePasscode = (code: string) => {
    setPin({ ...pin, passcode: code });
  };
  const handleReEnteredPasscode = (code: string) => {
    setPin({ ...pin, reEnteredPasscode: code });
  };

  const handle_confirm = () => {
    if (pin.passcode !== pin.reEnteredPasscode) {
      showFlashMessage({
        message: "Error",
        description: "Passcodes do not match",
        type: "danger",
      });
      return;
    }
    mutation.mutate(
      {
        token: authenticatData.token,
        passcode: pin.passcode,
        otp: authenticatData.otp,
      },
      {
        onSuccess: (data) => {
          if (data.status === 200) {
            showToast();
          }
        },
      }
    );
  };
  return (
    <AuthBackground>
      <View style={styles.contain}>
        <AuthBackBtn onpress={() => navigation.goBack()} />

        <View style={styles.backCover}>
          <Text style={[styles.text, { color: theme.auth_text1 }]}>
            Set new passcode
          </Text>
          <Text style={[styles.text1, { color: theme.auth_text2 }]}>
            Enter your new passcode
          </Text>
          <Passcode onPinComplete={handlePasscode} label="Set passcode" />
          <Passcode
            onPinComplete={handleReEnteredPasscode}
            label="Re-Enter passcode"
          />
          <PrimaryButton
            onPress={handle_confirm}
            button_title={"Reset Passcode"}
            container_style={{
              borderRadius: 16,
              marginVertical: 10,
              backgroundColor: Colors.general.primary,
            }}
            text_style={{ color: "white" }}
          />
          {mutation.isPending && (
            <ActivityIndicator
              style={{ marginBottom: 10, alignSelf: "center" }}
              color={Colors.general.primary}
              size="small"
            />
          )}
        </View>

        <ToastWrapper visible={visible} slideAnim={slideAnim}>
          <PasswordReset close_handler={hideToast} />
        </ToastWrapper>
      </View>
    </AuthBackground>
  );
};

const PasswordReset = ({ close_handler }: { close_handler: () => void }) => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const handleNavigation = () => {
    close_handler();
    navigation.navigate("SignInScreen");
  };
  return (
    <View
      style={[
        styles.passwordReset,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <Icon name="check-circle-fill" size={110} color="#31D0AA" />
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.text5, { color: theme.auth_text1 }]}>
          Password Reset Successful
        </Text>
        <Text style={[styles.text6, { color: theme.dark }]}>
          Try not to forget it this time 👍🏽{" "}
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <PrimaryButton
          onPress={handleNavigation}
          button_title={"Done"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
      </View>
    </View>
  );
};
export default SetPasswordScreeen;
