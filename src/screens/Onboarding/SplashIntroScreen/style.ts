import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/colors";

const splashIntroStyles = StyleSheet.create({
  primaryStyles: {
    width: "100%",
    flex: 1,
  },
  container: {
    height: "100%",

    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  content: {
    height: 200,
    width: "100%",
    marginTop: 30,
  },
  logoStyle: {
    width: 28,
    height: 45,
    marginVertical: 10,
  },
  text1: {
    fontSize: 40,
    color: "white",
    fontFamily: "Outfit-Bold",
    textAlign: "center",
  },
  bottomTextCover: {
    height: 200,
    width: "100%",
  },
  bottomText: {
    fontSize: 24,
    color: Colors.general.white,
    fontFamily: "Outfit-Light",
    textAlign: "center",
  },
  btnCover: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },
  containerStyles1: {
    backgroundColor: "#FFFFFF40",
    borderRadius: 20,
    width: 145,
    height: 60,
  },
  textStyles1: {
    color: Colors.general.white,
  },
  containerStyles2: {
    backgroundColor: Colors.general.white,
    borderRadius: 20,
    width: 145,
    height: 60,
  },
  textStyles2: {
    color: Colors.general.primary
  },
});

export default splashIntroStyles;
