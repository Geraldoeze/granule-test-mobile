import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import PrimaryButton from "../../display/PrimaryButton";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput } from "@react-native-material/core";
import CustomSelectInput from "./SelectInput";

const VerifyInfoThree = ({
  handleNextPage,
}: {
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();
  return (
    <View style={styles.backCover}>
      <View style={{ height: "75%" }}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          PEP Status
        </Text>
        <Text style={[styles.text1, { color: theme.auth_text2 }]}>
          Please make sure that you provide accurate information. Providing
          false information may affect your access
        </Text>

        <ScrollView style={{ flex: 1 }}>
          <CustomSelectInput
            label={"Are you a current or past political office holder?"}
            inputLabel={"Select option"}
            value={""}
            onPress={() => {}}
          />
          <CustomSelectInput
            label={"Select political office"}
            inputLabel={"Select option"}
            value={""}
            onPress={() => {}}
          />
          <CustomSelectInput
            label={"Are related to a current or past political office holder?"}
            inputLabel={"Select option"}
            value={""}
            onPress={() => {}}
          />
        </ScrollView>
      </View>

      <View style={{}}>
        <PrimaryButton
          onPress={() => handleNextPage(4)}
          button_title={"Next"}
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

export default VerifyInfoThree;

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
    marginVertical: 16,
  },
  inputStyle: {
    fontFamily: "Outfit Medium",
    fontSize: 18,
  },
});
