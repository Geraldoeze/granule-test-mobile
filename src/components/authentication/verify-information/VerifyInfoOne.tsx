import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import PrimaryButton from "../../display/PrimaryButton";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput } from "@react-native-material/core";
import { useBottomSheet } from "../../../hooks/BottomSheetProvider";
import CustomSelectInput from "./SelectInput";

const VerifyInfoOne = ({
  handleNextPage,
}: {
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();
  const { openBottomSheet } = useBottomSheet();
  const handleOpenBottomSheet = () => {
    openBottomSheet(
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.contentText}>This is some scrollable content!</Text>
        {/* Add more content to demonstrate scrolling */}
        {Array.from({ length: 20 }).map((_, index) => (
          <Text key={index} style={styles.contentText}>
            Item {index + 1}
          </Text>
        ))}
      </ScrollView>,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };

  return (
    <View style={styles.backCover}>
      <View style={{ height: "75%" }}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Residential Address
        </Text>
        <ScrollView style={{ flex: 1 }}>
          <CustomSelectInput
            label={"Country"}
            inputLabel={"Select country"}
            value={""}
            onPress={handleOpenBottomSheet}
          />
          <CustomSelectInput
            label={"State"}
            inputLabel={"Select state"}
            value={""}
            onPress={() => {}}
          />
          <CustomSelectInput
            label={"LGA"}
            inputLabel={"Select LGA"}
            value={""}
            onPress={() => {}}
          />
          <View style={styles.inputCover}>
            <Text
              style={[
                styles.text2,
                {
                  color: Colors.light.label,
                },
              ]}
            >
              City
            </Text>
            <TextInput
              variant="standard"
              label=""
              placeholder="Type in your city"
              color={Colors.general.primary}
              placeholderTextColor={Colors.light.label}
              inputStyle={styles.inputStyle}
            />
          </View>

          <View style={styles.inputCover}>
            <Text
              style={[
                styles.text2,
                {
                  color: Colors.light.label,
                },
              ]}
            >
              Address
            </Text>
            <TextInput
              variant="standard"
              label="Type Address"
              placeholder="Type in your city"
              color={Colors.general.primary}
              placeholderTextColor={Colors.light.label}
              inputStyle={styles.inputStyle}
            />
          </View>
        </ScrollView>
      </View>

      <View style={{}}>
        <PrimaryButton
          onPress={() => handleNextPage(2)}
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

export default VerifyInfoOne;

const styles = StyleSheet.create({
  backCover: {
    marginVertical: 20,
    paddingHorizontal: 20,
    height: "82%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  content: { paddingHorizontal: 20 },

  text: { fontFamily: "Outfit Bold", fontSize: 36, marginBottom: 16 },
  text1: {
    fontSize: 18,
    fontFamily: "Outfit Regular",
    marginBottom: 10,
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

  scrollViewContent: {
    padding: 20,
  },
  contentText: {
    marginBottom: 10,
    fontSize: 16,
  },
});
