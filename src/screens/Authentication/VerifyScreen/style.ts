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
  text5: {
    fontFamily: "Outfit Bold",
    fontSize: 24,
  },
  text6: {
    fontFamily: "Outfit Regular",
    fontSize: 24,
  },
  inputCover: {
    marginVertical: 30,
  },
  inputStyle: {
    fontFamily: "Outfit Regular",
    fontSize: 24,
  },
  bottomTextCover: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
  otpCover: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    height: 135,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 45,
  },
  // toastContainer: {
  //   position: "absolute",
  //   bottom: 0,
  //   width: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: 10,
  // },
  toastContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default verifyStyle;
