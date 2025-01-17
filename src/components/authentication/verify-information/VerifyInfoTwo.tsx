import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../../display/PrimaryButton";
import { Colors, useTheme } from "../../../constants/colors";

const VerifyInfoTwo = ({
  handleNextPage,
}: {
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();
  return (
    <View style={styles.backCover}>
      <View style={{ height: "50%" }}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Are you a Politically Exposed Person?
        </Text>
      </View>

      <View style={{}}>
        <PrimaryButton
          onPress={() => handleNextPage(4)}
          button_title={"No, I’m not"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: Colors.general.primary,
          }}
          text_style={{ color: Colors.general.primary }}
        />
        <PrimaryButton
          onPress={() => handleNextPage(3)}
          button_title={"Yes, I am"}
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

export default VerifyInfoTwo;

const styles = StyleSheet.create({
  backCover: {
    marginVertical: 20,
    paddingHorizontal: 20,
    height: "82%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  text: { fontFamily: "Outfit Bold", fontSize: 36, marginBottom: 10 },
  text1: {
    fontSize: 18,
    fontFamily: "Outfit Regular",
  },
  text2: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },

  inputCover: {
    marginVertical: 4,
  },
  inputStyle: {
    fontFamily: "Outfit Medium",
    fontSize: 18,
  },
});
