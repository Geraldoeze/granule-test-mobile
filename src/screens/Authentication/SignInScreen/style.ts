import { StyleSheet } from "react-native";

const signInStyle = StyleSheet.create({
  logoCover: { marginVertical: 30, alignItems: "center" },
  logoStyles: {
    width: 214,
    height: 67,
    marginVertical: 10,
  },
  content: { paddingHorizontal: 20 },
  inputCover: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },
  text1: {
    fontSize: 16,
    fontFamily: "Outfit Regular",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  containerStyle: {
    borderRadius: 20,
    width: "100%",
    height: 70,
    marginVertical: 10,
  },
  bottomTextCover: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text2: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },
  text3: {
    fontSize: 16,

    fontFamily: "Outfit Medium",
  },
});

export default signInStyle;
