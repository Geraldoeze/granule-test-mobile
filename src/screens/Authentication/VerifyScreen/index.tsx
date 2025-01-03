// React and React Native imports
import React, { useEffect, useRef, useState } from "react";
import { Animated, Linking, Pressable, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IconButton, TextInput } from "@react-native-material/core";

// Third-party libraries
import Icon from "react-native-vector-icons/Octicons";

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
  const [input_value, setInput_value] = useState("");
  const { formatInput, hideToast, showToast, handleNavigation } = useVerify();

  const handleInputChange = (value: string) => {
    const formatted = formatInput(value);
    setInput_value(formatted);
  };

  const closeToast = () => {
    hideToast(animation, () => setVisible(false));
  };

  const handleNavigationClick = () => {
    handleNavigation(previous_screen, navigation, animation, setVisible);
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
            onPress={handleNavigationClick}
            button_title={"Verify"}
            container_style={{
              borderRadius: 16,
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
      // anotherFunction();
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
