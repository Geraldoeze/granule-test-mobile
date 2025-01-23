import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "../../../constants/colors";
import TopUp from "../../../../assets/icons/dashboard/top_up.svg";
import ToGranule from "../../../../assets/icons/dashboard/to_granule.svg";
import ToBank from "../../../../assets/icons/dashboard/to_bank.svg";
import Account from "../../../../assets/icons/dashboard/account.svg";
import { StyleSheet } from "react-native";

const Shortcuts = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={[styles.text, { color: theme.dark }]}>Shortcuts</Text>
      <View style={[styles.contain, { backgroundColor: theme.white }]}>
        <View>
          <View style={styles.cover}>
            <TopUp width={25} height={25} />
          </View>
          <Text style={[styles.text1, { color: theme.text_body }]}>Top-Up</Text>
        </View>
        <View>
          <View style={styles.cover}>
            <ToGranule width={25} height={25} />
          </View>
          <Text style={[styles.text1, { color: theme.text_body }]}>
            To Granule
          </Text>
        </View>
        <View>
          <View style={styles.cover}>
            <ToBank width={25} height={25} />
          </View>
          <Text style={[styles.text1, { color: theme.text_body }]}>
            To Bank
          </Text>
        </View>
        <View>
          <View style={styles.cover}>
            <Account width={25} height={25} />
          </View>
          <Text style={[styles.text1, { color: theme.text_body }]}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 18,
    marginVertical: 16,
  },

  cover: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    backgroundColor: "#F9F6FB",
  },
  text: {
    fontSize: 16,
    fontFamily: "Outfit Regular",
  },
  text1: {
    fontSize: 12,
    fontFamily: "Outfit Regular",
  },
});

export default Shortcuts;
