import { StyleSheet } from "react-native";

const verifyInformation = StyleSheet.create({
  backCover: { marginVertical: 20, paddingHorizontal: 20,  flexDirection: 'column', justifyContent: 'space-between' },

  content: { paddingHorizontal: 20 },

  text: { fontFamily: "Outfit Bold", fontSize: 36, marginBottom: 16 },
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
    fontSize: 22,
  },
  text6: {
    fontFamily: "Outfit Regular",
    fontSize: 20,
  },
  inputCover: {
    marginVertical: 4,
  },
  inputStyle: {
    fontFamily: "Outfit Medium",
    fontSize: 18,
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

export default verifyInformation;
