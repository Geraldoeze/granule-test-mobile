import { IconButton, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, useTheme } from "../../../constants/colors";

type SelectInput = {
  label: string;
  inputLabel: string;
  value: string;
  onPress: () => void;
};
const CustomSelectInput = ({
  label,
  inputLabel,
  value,
  onPress,
}: SelectInput) => {
  const theme = useTheme();

  return (
    <View style={styles.inputCover} testID="input-container">
      <Text style={[styles.text, { color: theme.label }]}>{label}</Text>

      <TouchableOpacity onPress={onPress}>
      <TextInput
        variant="standard"
        label=""
        placeholder={inputLabel}
        placeholderTextColor={Colors.light.label}
        color={theme.label}
        secureTextEntry={true} // Toggle secure text entry
        passwordRules={"*"}
        style={{}}
        value={value}
        
        inputStyle={styles.inputStyle}
        trailing={
          <IconButton
            icon={(props) => (
              <Ionicons
                name={"chevron-down"}
                size={24}
                // color={Colors.general.primary}
                color={"#2F3233"}
              />
            )}
            // onPress={() => setShow_password((prev) => !prev)}
          />
        }
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },
  inputCover: {
    marginVertical: 16,
  },
  inputStyle: {
    fontFamily: "Outfit Regular",
    fontSize: 18,
  },
});
export default CustomSelectInput;
