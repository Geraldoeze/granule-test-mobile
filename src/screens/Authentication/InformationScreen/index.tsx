// React and React Native imports
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

// Third-party libraries
import { TextInput, IconButton } from "@react-native-material/core";

// Project constants
import { Colors } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import { useAppNavigation } from "../../../navigation/MainStack";
import AuthBackBtn from "../../../components/display/AuthBackBtn";

// Styles
import styles from "./style";

const data = ["BVN", "NIN"];
const InformationScreen = () => {
  const navigation = useAppNavigation();
  const [information, setInformation] = useState("BVN");

  const handleInformationChange = (text: string) => {
    setInformation(text);
  };
  return (
    <AuthBackground>
      <AuthBackBtn onpress={() => navigation.goBack()} />

      <View style={styles.backCover}>
        <Text style={[styles.text, { color: Colors.light.auth_text1 }]}>
          ID information
        </Text>
        <Text style={[styles.text1, { color: Colors.light.auth_text2 }]}>
          Please provide means of identification BVN/NIN to verify your account
          application
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
              onPress={() => setInformation(info)}
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
            placeholderTextColor={"#4A4A684C"}
            keyboardType="number-pad"
            inputStyle={{
              fontFamily: "Outfit Medium",
              fontSize: 20,
            }}
            color={Colors.general.primary}
          />
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
        </View>

        <PrimaryButton
          onPress={() => navigation.navigate("VerifyInformation")}
          button_title={"Next"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
      </View>
    </AuthBackground>
  );
};

export default InformationScreen;
