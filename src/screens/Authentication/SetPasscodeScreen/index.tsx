// React & React Native Imports
import React, { useRef, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

// Third-party Libraries
import Icon from "react-native-vector-icons/Octicons";

// Project Constants
import { Colors, useTheme } from "../../../constants/colors";

// Components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import Passcode from "../../../components/display/Passcode";

// Styles
import styles from "./style";

// Functions
import useSetPasscode from "./useSetPasscode";
import { useSelector } from "react-redux";
import { selectAuthenticatData } from "../../../store/signup/selectors";
import { showFlashMessage } from "../../../utils/flash-message";
import { ToastWrapper } from "../../../components/display/ToastWrapper";
import { useToast } from "../../../hooks/useToast";
import SecureAuthStorage from "../../../utils/auth-storage";

const SetPasscodeScreeen = () => {
  const navigation = useAppNavigation();
  const theme = useTheme();
  const [pin, setPin] = useState({
    passcode: "",
    reEnteredPasscode: "",
  });
  const authenticatData = useSelector(selectAuthenticatData);
  const { visible, slideAnim, showToast, hideToast } = useToast();

  const { mutation } = useSetPasscode();

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
        email: authenticatData.email,
        passcode: pin.passcode,
      },
      {
        onSuccess: (data) => {
          if (data.status === 201) {
            showToast();
          }
        },
      }
    );
  };

  const handlePasscode = (code: string) => {
    setPin({ ...pin, passcode: code });
  };
  const handleReEnteredPasscode = (code: string) => {
    setPin({ ...pin, reEnteredPasscode: code });
  };

  return (
    <AuthBackground>
      <View style={styles.contain}>
        <AuthBackBtn onpress={() => navigation.goBack()} />

        <View style={styles.backCover}>
          <Text style={[styles.text, { color: theme.auth_text1 }]}>
            Set your Passcode
          </Text>
          <Text style={[styles.text1, { color: theme.auth_text2 }]}>
            Enter a 6 digit passcode
          </Text>
          <Passcode onPinComplete={handlePasscode} label="Set passcode" />
          <Passcode
            onPinComplete={handleReEnteredPasscode}
            label="Re-Enter passcode"
          />

          <PrimaryButton
            onPress={handle_confirm}
            button_title={"Confirm"}
            container_style={{
              borderRadius: 16,
              marginVertical: 20,
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
          <ProfileCreated
            close_handler={hideToast}
            email={authenticatData.email}
          />
        </ToastWrapper>
      </View>
    </AuthBackground>
  );
};

const ProfileCreated = ({
  close_handler,
  email,
}: {
  close_handler: () => void;
  email: string;
}) => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const handleNavigation = async () => {
    const stored = await SecureAuthStorage.storeEmail(email);
    if (!stored) {
      showFlashMessage({
        message: "Error",
        description: "Error storing email",
        type: "danger",
      });
      return;
    }
    close_handler();
    navigation.navigate("InformationScreen");
  };
  return (
    <View
      style={[
        styles.profileCover,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <Icon name="check-circle-fill" size={110} color="#31D0AA" />
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.text5, { color: theme.auth_text1 }]}>
          Profile Created
        </Text>
        <Text style={[styles.text6, { color: theme.dark }]}>
          Your profile have been created and you can proceed to verification
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <PrimaryButton
          onPress={handleNavigation}
          button_title={"Proceed"}
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
export default SetPasscodeScreeen;
