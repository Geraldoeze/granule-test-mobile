import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import BgCover from "../../../../assets/icons/dashboard/bg_cover2.svg";
import Ionicons from "react-native-vector-icons/Ionicons";

const Advert = () => {
  return (
    <View style={styles.contain}>
      <BgCover width={"100%"} height={"100%"} style={styles.coverImg} />
      <View style={styles.cover}>
        <Text style={[styles.text, { color: "#FFFFFF" }]}>
          Get the most out of Granule
        </Text>
        <View>
          <Text>Get Started</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: "100%",
    position: "relative",
    height: 120,
    marginVertical: 10,
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
    fontSize: 20,
    fontFamily: "Outfit Medium",
    width: "60%",
  },
  text1: {
    fontSize: 17,
    fontFamily: "Outfit SemiBold",
  },
});

export default Advert;
