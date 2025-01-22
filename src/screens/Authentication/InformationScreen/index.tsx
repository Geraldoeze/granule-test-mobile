// React and React Native imports
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Third-party libraries
import { TextInput, IconButton } from "@react-native-material/core";
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
import { showFlashMessage } from "../../../utils/flash-message";
import { useDispatch } from "react-redux";
import { updatePersonalInfo } from "../../../store/signup/slice";
import { Animated } from "react-native";
import useInformation from "./useInformation";
import { useToast } from "../../../hooks/useToast";
import { ToastWrapper } from "../../../components/display/ToastWrapper";

const data = ["BVN", "NIN"];
const InformationScreen = () => {
  const { handleNext, handleBack } = useInformation();
  const { visible, slideAnim, showToast, hideToast } = useToast();

  const [information, setInformation] = useState("BVN");
  const [info, setInfo] = useState("");

  const handleInformationChange = (text: string) => {
    setInfo("");
    setInformation(text);
  };

  return (
    <AuthBackground>
      <View style={styles.contain}>
        <AuthBackBtn onpress={handleBack} />

        <View style={styles.backCover}>
          <Text style={[styles.text, { color: Colors.light.auth_text1 }]}>
            ID information
          </Text>
          <Text style={[styles.text1, { color: Colors.light.auth_text2 }]}>
            Please provide means of identification BVN/NIN to verify your
            account application
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              gap: 16,
            }}
          >
            {data?.map((info, index) => (
              <PrimaryButton
                button_title={info}
                key={index}
                container_style={{
                  paddingHorizontal: 10,
                  width: 150,
                  borderRadius: 16,
                  backgroundColor: "#EC0C271A",
                  borderWidth: information === info ? 1 : 0,
                  borderColor: Colors.general.primary,
                }}
                onPress={() => handleInformationChange(info)}
                text_style={{
                  color:
                    information === info ? Colors.general.primary : "#EC0C274C",
                  fontSize: 16,
                  fontFamily:
                    information === info ? "Outfit Bold" : "Outfit Regular",
                }}
              ></PrimaryButton>
            ))}
          </View>
          <View style={styles.inputCover}>
            <Text
              style={[
                styles.text2,
                {
                  color: Colors.general.label,
                },
              ]}
            >
              {information}
            </Text>
            <TextInput
              variant="standard"
              placeholder="Enter number here"
              value={info}
              onChangeText={setInfo}
              placeholderTextColor={"#4A4A684C"}
              keyboardType="number-pad"
              inputStyle={{
                fontFamily: "Outfit Medium",
                fontSize: 20,
              }}
              color={Colors.general.primary}
            />
            <TouchableOpacity onPress={() => showToast()}>
              <Text
                style={[
                  styles.text3,
                  {
                    color: Colors.light.primary,
                  },
                ]}
              >
                {information === "BVN"
                  ? "Forgot BVN? Click here"
                  : "Forgot NIN? Click here"}
              </Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton
            onPress={() => handleNext(info, information)}
            button_title={"Next"}
            container_style={{
              borderRadius: 16,
              marginVertical: 10,
              backgroundColor: Colors.general.primary,
            }}
            text_style={{ color: "white" }}
          />
        </View>
        <ToastWrapper visible={visible} slideAnim={slideAnim}>
          <ForgotId close_handler={hideToast} information={information} />
        </ToastWrapper>
      </View>
    </AuthBackground>
  );
};

const ForgotId = ({
  close_handler,
  information,
}: {
  close_handler: () => void;
  information: string;
}) => {
  const theme = useTheme();

  const handleBtn = () => {
    close_handler();
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
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.text5, { color: theme.auth_text1 }]}>
          {information === "BVN" ? "Retrieve BVN" : "Retrieve NIN"}
        </Text>
        <Text style={[styles.text6, { color: theme.dark }]}>
          {information === "BVN"
            ? "Dial *565*0# with the number linked to your NIN"
            : "Dial *346# with the number linked to your NIN"}
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <PrimaryButton
          onPress={handleBtn}
          button_title={"Dial"}
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

export default InformationScreen;
