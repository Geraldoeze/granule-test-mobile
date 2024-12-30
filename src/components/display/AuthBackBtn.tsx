import { View, Text, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../../constants/colors";

type AuthBackBtn = {
  onpress: () => void;
};
const AuthBackBtn = ({ onpress }: AuthBackBtn) => {
  const theme = useTheme();
  return (
    <View
      style={{
        marginVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
      }}
    >
      <Pressable
        onPress={onpress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: theme.light_bg,
          paddingVertical: 10,
          paddingRight: 15,
          paddingLeft: 8,
          borderRadius: 35,
        }}
      >
        <Icon name="keyboard-arrow-left" size={20} color="black" />
        <Text
          style={{
            fontFamily: "Outfit Medium",
            fontSize: 16,
            color: theme.dark,
          }}
        >
          Back
        </Text>
      </Pressable>
    </View>
  );
};

export default AuthBackBtn;
