import { StyleSheet } from "react-native";

const forgotPasswordStyle = StyleSheet.create({
  backCover: { marginVertical: 10, paddingHorizontal: 20 },

  content: { paddingHorizontal: 20 },

  text: { fontFamily: "Outfit Bold", fontSize: 40, marginBottom: 16 },
  text1: {
    fontSize: 18,
    fontFamily: "Outfit Regular",
    marginBottom: 10
  },
  text2: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },
  text3: {
    fontSize: 16,
    fontFamily: "Outfit SemiBold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  text4: {
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Outfit Regular",
  },
  inputCover: {
    marginVertical: 20,
  },
  inputStyle: {
    fontFamily: "Outfit Medium",
    fontSize: 18,
  },
  bottomTextCover: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default forgotPasswordStyle;
