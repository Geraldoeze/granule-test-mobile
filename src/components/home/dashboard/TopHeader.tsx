import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { getGreetingInNigeriaTime } from "../../../utils/sub-functions";
import { useTheme } from "../../../constants/colors";

export default function TopHeader() {
  const theme = useTheme();
  
  return (
    <View style={styles.contain}>
      <View>
        <Text style={[styles.text, { color: theme.auth_text2 }]}>
          {getGreetingInNigeriaTime()}
        </Text>
        <Text style={[styles.text1, { color: theme.text_body }]}>
          Gerrard 👋🏻
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        style={{ padding: 6, position: "relative" }}
        onPress={() => {}}
      >
        <View
          style={{
            position: "absolute",
            top: -6,
            right: 2,
          }}
        >
          <Entypo name="dot-single" size={24} color="#EC0C27" />
        </View>
        <Ionicons name="notifications-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Outfit Regular",
  },
  text1: {
    fontSize: 17,
    fontFamily: "Outfit SemiBold",
  },
});
