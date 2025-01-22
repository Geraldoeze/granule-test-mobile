import { StyleSheet } from "react-native";

const informationStyle = StyleSheet.create({
  backCover: { marginVertical: 10, paddingHorizontal: 20 },
  contain: {
    height: "100%",
    position: "relative",
  },
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
  toastContainer: {
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default informationStyle;
