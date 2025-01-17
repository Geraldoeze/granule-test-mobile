import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import PrimaryButton from "../../display/PrimaryButton";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput } from "@react-native-material/core";
import CustomSelectInput from "./SelectInput";

const VerifyInfoFour = ({
  handleNextPage,
}: {
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();
  return (
    <View style={styles.backCover}>
      <View style={{ height: "75%" }}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Source of income
        </Text>
        <Text style={[styles.text1, { color: theme.auth_text2 }]}>
          Provide more details on your source(s) of income
        </Text>
        <ScrollView style={{ flex: 1 }}>
          <CustomSelectInput
            label={"Occupation"}
            inputLabel={"Select occupation"}
            value={""}
            onPress={() => {}}
          />
          <CustomSelectInput
            label={"Annual income"}
            inputLabel={"Select range"}
            value={""}
            onPress={() => {}}
          />
          <CustomSelectInput
            label={"Do you have other sources of income?"}
            inputLabel={"Select "}
            value={""}
            onPress={() => {}}
          />
        </ScrollView>
      </View>

      <View style={{}}>
        <PrimaryButton
          onPress={() => {}}
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

export default VerifyInfoFour;

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
