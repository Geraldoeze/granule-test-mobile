import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Animated, Button, Pressable, Text, View } from "react-native";
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
import Icon from "react-native-vector-icons/Octicons";
import { useBottomSheet } from "../../../hooks/BottomSheetProvider";

type VerifyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyScreen"
>;

const VerifyScreen: React.FC<VerifyScreenProps> = ({ route }) => {
  const { previous_screen } = route.params;
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const [visible, setVisible] = useState(false);
  const animation = useRef(new Animated.Value(200)).current; // Start off-screen (200px below)

  const showToast = () => {
    setVisible(true);
    Animated.timing(animation, {
      toValue: 0, // Move to screen bottom
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideToast = () => {
    Animated.timing(animation, {
      toValue: 200, // Move off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false)); // Set visibility to false after animation
  };

  const navigation = useAppNavigation();
  const theme = useTheme();

  // const handleOpenSheet = () => {
  //   openBottomSheet(
  //     <OtpVerified />,
  //     ["20%", "20%"] // Optional custom snap points
  //   );
  // };

  const handle_navigation = () => {
    if (previous_screen === "SignInScreen") {
      showToast();
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
             
              marginVertical: 10,
              backgroundColor: Colors.general.primary,
            }}
            text_style={{ color: "white" }}
          />
        </View>
      </AuthBackground>

      {visible && (
        <Animated.View
          style={[
            styles.toastContainer,
            { transform: [{ translateY: animation }] },
          ]}
        >
          <OtpVerified close_handler={hideToast} />
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
      // anotherFunction();
    }, 4000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [close_handler]);
  return (
    <View
      style={[
        styles.otpCover,
    
      ]}
    >
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
