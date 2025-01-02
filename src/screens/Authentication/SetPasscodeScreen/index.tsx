import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Colors, useTheme } from "../../../constants/colors";
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import styles from "./style";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import Passcode from "../../../components/display/Passcode";
import Icon from "react-native-vector-icons/Octicons";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const MODAL_HEIGHT = SCREEN_HEIGHT * 0.4;

const SetPasscodeScreeen = () => {
  const navigation = useAppNavigation();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(MODAL_HEIGHT)).current;

  // Show toast with animation

  const showToast = () => {
    setVisible(true);
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 8,
      speed: 12,
    }).start();
  };

  const hideToast = () => {
    Animated.timing(slideAnim, {
      toValue: MODAL_HEIGHT,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  const handle_confirm = () => {
    showToast();
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
          <Passcode onPinComplete={() => {}} label="Set passcode" />
          <Passcode onPinComplete={() => {}} label="Re-Enter passcode" />

          <PrimaryButton
            onPress={handle_confirm}
            button_title={"Confirm"}
            container_style={{
              borderRadius: 20,

              marginVertical: 20,
              backgroundColor: Colors.general.primary,
            }}
            text_style={{ color: "white" }}
          />
        </View>
        {visible && (
          <Animated.View
            style={[
              styles.toastContainer,
              {
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <ProfileCreated close_handler={hideToast} />
          </Animated.View>
        )}
      </View>
    </AuthBackground>
  );
};

const ProfileCreated = ({ close_handler }: { close_handler: () => void }) => {
  const theme = useTheme();
  const navigation = useAppNavigation();

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
          onPress={close_handler}
          button_title={"Proceed"}
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
    </View>
  );
};
export default SetPasscodeScreeen;
