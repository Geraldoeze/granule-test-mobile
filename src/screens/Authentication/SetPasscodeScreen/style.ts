import { StyleSheet } from "react-native";

const setPasscodeStyle = StyleSheet.create({
  contain: {
    height: "100%",
    position: "relative",
  },
  backCover: { marginVertical: 10, paddingHorizontal: 20 },

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
    fontFamily: "Outfit SemiBold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  text4: {
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Outfit Regular",
  },
  text5: {
    fontFamily: "Outfit Bold",
    fontSize: 22,
    marginVertical: 10,
    textAlign: "center",
  },
  text6: {
    fontFamily: "Outfit Regular",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 6,
  },
  inputCover: {
    marginVertical: 30,
  },
  bottomTextCover: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileCover: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
    width: "100%",
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
 
});

export default setPasscodeStyle;
