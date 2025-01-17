// React and React Native imports
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Linking,
  Pressable,
  Text,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IconButton, TextInput } from "@react-native-material/core";

// Third-party libraries
import Icon from "react-native-vector-icons/Octicons";
import { useDispatch, useSelector } from "react-redux";

// Project constants
import { Colors, useTheme } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import {
  RootStackParamList,
  useAppNavigation,
} from "../../../navigation/MainStack";

// Styles
import styles from "./style";

// Function
import useVerify from "./useVerify";
import { selectAuthenticatData } from "../../../store/signup/selectors";
import { formatTime, removeDashes } from "../../../utils/sub-functions";
import { showFlashMessage } from "../../../utils/flash-message";
import {
  apiFogotPassword,
  apiResendVerification,
} from "../../../api/authentication";
import { updateAuthenticationData } from "../../../store/signup/slice";

type VerifyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyScreen"
>;

const VerifyScreen: React.FC<VerifyScreenProps> = ({ route }) => {
  const { previous_screen } = route.params;
  const [visible, setVisible] = useState(false);
  const animation = useRef(new Animated.Value(200)).current; // Start off-screen (200px below)
  const navigation = useAppNavigation();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(120); // 120 seconds = 2 minutes
  const {
    formatInput,
    hideToast,
    showToast,
    handleNavigation,
    verifyAccountMutation,
    verifyOtpMutation,
  } = useVerify();
  const authenticatData = useSelector(selectAuthenticatData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);
  const handleResend = async () => {
    if (canResend) {
      // Your resend logic here
      let resend;
      if (previous_screen === "SignUpScreen") {
        resend = await apiResendVerification(authenticatData?.email.toString());
        if (resend.status === 200) {
          showFlashMessage({
            message: "Success",
            description: resend.data.message,
            type: "success",
          });
        }
      } else if (previous_screen === "ForgotPasswordScreen") {
        resend = await apiFogotPassword(authenticatData?.email.toString());
        if (resend.status === 200) {
          showFlashMessage({
            message: "Success",
            description: resend.data.message,
            type: "success",
          });
          const result = dispatch(
            updateAuthenticationData({
              token: resend?.data?.data?.token,
            })
          );
          console.log("Dispatchresult:", result);
        }
      }

      setCountdown(120); // Reset countdown
      setCanResend(false);
    }
  };

  const handleInputChange = (value: string) => {
    const formatted = formatInput(value);
    setInputValue(formatted);
  };

  const closeToast = () => {
    console.log("run");
    hideToast(animation, () => setVisible(false));
  };

  const handleNavigationClick = () => {
    handleNavigation(previous_screen, navigation, animation, setVisible);
  };

  const handleVerify = () => {
    // check if input is valid
    if (inputValue?.length < 5) {
      showFlashMessage({
        message: "Error",
        description: "Please enter a valid OTP",
        type: "danger",
      });
      return;
    }
    if (previous_screen === "SignUpScreen") {
      verifyAccountMutation.mutate(
        {
          token: authenticatData.token,
          code: removeDashes(inputValue),
        },
        {
          onSuccess: (data) => {
            if (data.status === 200) {
              handleNavigationClick();
            }
          },
        }
      );
    } else if (previous_screen === "ForgotPasswordScreen") {
      verifyOtpMutation.mutate({
        token: authenticatData.token,
        otp: removeDashes(inputValue),
      });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <AuthBackground>
        <AuthBackBtn onpress={() => navigation.goBack()} />

        <View style={styles.backCover}>
          <Text style={[styles.text, { color: theme.auth_text1 }]}>
            Verify account
          </Text>
          <Text style={[styles.text1, { color: theme.auth_text2 }]}>
            OTP have been sent to{" "}
            <Text style={[styles.text1, { color: theme.dark }]}>
              {authenticatData.email}
            </Text>
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
              OTP
            </Text>
            <TextInput
              variant="standard"
              label=""
              value={inputValue}
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
            <Pressable onPress={handleResend} style={{ flexDirection: "row" }}>
              <Text style={[styles.text4, { color: theme.auth_text3 }]}>
                {!canResend ? "Resend " : ""}
              </Text>
              <Text style={[styles.text4, { color: theme.dark }]}>
                {canResend ? "Resend " : `(${formatTime(countdown)})`}
              </Text>
            </Pressable>
          </View>
          <PrimaryButton
            onPress={handleVerify}
            button_title={"Verify"}
            container_style={{
              borderRadius: 16,
              marginVertical: 10,
              backgroundColor: Colors.general.primary,
            }}
            text_style={{ color: "white" }}
          />
          <View>
            {(verifyAccountMutation.isPending ||
              verifyOtpMutation.isPending) && (
              <ActivityIndicator
                style={{ marginBottom: 10, alignSelf: "center" }}
                color={Colors.general.primary}
                size="small"
              />
            )}
          </View>
        </View>
      </AuthBackground>

      {visible && (
        <Animated.View
          style={[
            styles.toastContainer,
            { transform: [{ translateY: animation }] },
          ]}
        >
          <OtpVerified close_handler={closeToast} />
        </Animated.View>
      )}
    </View>
  );
};

const OtpVerified = ({ close_handler }: { close_handler: () => void }) => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      close_handler();
      console.log("running");
      // Navigate after the toast is fully shown
      navigation.navigate("SetPasscodeScreen");
    }, 4000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [close_handler]);
  return (
    <View style={[styles.otpCover]}>
      <Icon name="check-circle-fill" size={60} color="#31D0AA" />
      <View style={{}}>
        <Text style={[styles.text5, { color: theme.auth_text1 }]}>
          OTP Verified
        </Text>
        <Text style={[styles.text6, { color: theme.dark }]}>
          Successful Verification!
        </Text>
      </View>
    </View>
  );
};
export default VerifyScreen;

// const styles = StyleSheet.create({
//   backText: {},
//   text1: { fontFamily: "Outfit Bold", fontSize: 40 },
//   text2: { fontFamily: "Outfit Regular", fontSize: 18 },
// });
