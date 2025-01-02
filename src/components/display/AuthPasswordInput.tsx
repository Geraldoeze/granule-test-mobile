import { IconButton, TextInput } from "@react-native-material/core";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, useTheme } from "../../constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

type AuthPasswordInput = {
  label: string;
};
const AuthPasswordInput = ({ label }: AuthPasswordInput) => {
  const theme = useTheme();
  const [show_password, setShow_password] = useState(false);
  return (
    <View style={styles.inputCover} testID="input-container">
      <Text style={[styles.text, { color: theme.primary }]}>{label}</Text>
      <TextInput
        variant="standard"
        label=""
        placeholder="*******"
        placeholderTextColor={"#373737"}
        color={Colors.general.primary}
        secureTextEntry={true} // Toggle secure text entry
        passwordRules={"*"}
        style={{}}
        inputStyle={{}}
        trailing={
          <IconButton
            icon={(props) => (
              <Ionicons
                name={show_password ? "eye-outline" : "eye-off-outline"}
                size={24}
                // color={Colors.general.primary}
                color={"#2F3233"}
              />
            )}
            onPress={() => setShow_password((prev) => !prev)}
            testID={`password-visibility-icon-${
              show_password ? "visible" : "hidden"
            }`}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },
  inputCover: {
    marginVertical: 30,
  },
});
export default AuthPasswordInput;
