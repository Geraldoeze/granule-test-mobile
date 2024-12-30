import { StyleSheet } from "react-native";

const verifyStyle = StyleSheet.create({
  backCover: { marginVertical: 20, paddingHorizontal: 20 },

  content: { paddingHorizontal: 20 },

  text: { fontFamily: "Outfit Bold", fontSize: 40, marginBottom: 16 },
  text1: {
    fontSize: 18,
    fontFamily: "Outfit Regular",
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },
  text3: {
    fontSize: 16,
    fontFamily: "Outfit Regular",
    textDecorationLine: "underline",
  },
  text4: {
    fontSize: 16,
    fontFamily: "Outfit SemiBold",
    textDecorationLine: "underline",
    
  },
  inputCover: {
    marginVertical: 30,
  },
  inputStyle: {
    fontFamily: 'Outfit Regular',
    fontSize: 24
  },
  bottomTextCover: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default verifyStyle;
