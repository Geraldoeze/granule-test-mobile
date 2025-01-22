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
import {
  formatInput,
  formatTime,
  removeDashes,
} from "../../../utils/sub-functions";
import { showFlashMessage } from "../../../utils/flash-message";
import {
  apiFogotPassword,
  apiResendVerification,
} from "../../../api/authentication";
import { updateAuthenticationData } from "../../../store/signup/slice";
import { ToastWrapper } from "../../../components/display/ToastWrapper";
import { useToast } from "../../../hooks/useToast";

type VerifyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyScreen"
>;

const VerifyScreen: React.FC<VerifyScreenProps> = ({ route }) => {
  const { previous_screen } = route.params;
  const navigation = useAppNavigation();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(120); // 120 seconds = 2 minutes
  const { handleResend, verifyAccountMutation, verifyOtpMutation } =
    useVerify();
  const { visible, slideAnim, showToast, hideToast } = useToast();
  let toastTimer: NodeJS.Timeout | null = null; // Timer reference to handle cleanup
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

  // handle OTP input value change
  const handleInputChange = (value: string) => {
    const format = formatInput(value);
    setInputValue(format);
  };

  const handleNavigationClick = () => {
    if (previous_screen === "SignInScreen") {
    } else if (previous_screen === "SignUpScreen") {
      showToast();
      setTimeout(() => {
        hideToast();
        navigation.navigate("SetPasscodeScreen");
      }, 3000);
    } else if (previous_screen === "ForgotPasswordScreen") {
      navigation.navigate("SetPasswordScreen");
    }
  };

  // handle Email OTP resend
  const handleResendEmail = () => {
    handleResend(previous_screen, canResend, setCanResend, setCountdown);
  };

  // handle POST request
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
      verifyOtpMutation.mutate(
        {
          token: authenticatData.token,
          otp: removeDashes(inputValue),
        },
        {
          onSuccess: (data) => {
            if (data.status === 200) {
              const result = dispatch(
                updateAuthenticationData({
                  otp: removeDashes(inputValue),
                })
              );
              console.log("Dispatchresult:", result);
              navigation.navigate("SetPasswordScreen");
            }
          },
        }
      );
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
            <Pressable
              onPress={handleResendEmail}
              style={{ flexDirection: "row" }}
            >
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

      <ToastWrapper visible={visible} slideAnim={slideAnim}>
        <OtpVerified />
      </ToastWrapper>
    </View>
  );
};

const OtpVerified = () => {
  const theme = useTheme();

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
