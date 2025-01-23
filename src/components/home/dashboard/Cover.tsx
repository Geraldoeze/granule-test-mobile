import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import BgCover from "../../../../assets/icons/dashboard/bg_cover1.svg";
import Ionicons from "react-native-vector-icons/Ionicons";

const Cover = () => {
  return (
    <View style={styles.contain}>
      <BgCover width={"100%"} height={"100%"} style={styles.coverImg} />
      <View style={styles.cover}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            marginVertical: 6,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#FFFFFF61",
              paddingHorizontal: 8,
              paddingVertical: 8,
              borderRadius: 9,
            }}
          >
            <Text style={[styles.text, { color: "#FFFFFF" }]}>
              Personal Account
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            alignItems: "center",
              gap: 10
            }}
          >
            <Text style={[styles.text, { color: "#FFFFFF" }]}>0102337755</Text>
            <Ionicons name="copy" size={20} color="white" />
          </View>
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={[styles.text1, { color: "#FFFFFF" }]}>
            ₦ 100,320,754.00
          </Text>
          
        </View>
        <View>
          <Text style={[styles.text, { color: "#FFFFFF" }]}>Over Draft ₦ 10,000.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: "100%",
    position: "relative",
    height: 170,
    marginVertical: 20,
    borderRadius: 18,
  },
  coverImg: {
    position: "absolute",
  },
  cover: {
    padding: 16,
    height: "100%",
  },

  text: {
    fontSize: 13,
    fontFamily: "Outfit Medium",
    color: "#FFFFFF",
    
  },
  text1: {
    fontSize: 28,
    fontFamily: "Outfit SemiBold",
  },
});

export default Cover;
