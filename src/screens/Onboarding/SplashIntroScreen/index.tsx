import React from "react";
import styles from "./style";
import { View, Image, Text, SafeAreaView } from "react-native";
import PrimaryView from "../../../components/display/PrimaryView";
import PrimaryButton from "../../../components/display/PrimaryButton";
import { useAppNavigation } from "../../../navigation/MainStack";
import Logo from "../../../../assets/icons/icon-sm.svg";

const SplashIntroScreen = ({}) => {
  const navigation = useAppNavigation();

  const handle_login = () => {
    navigation.navigate("SignInScreen"); // Navigate to SignInScreen
  };
  const handle_sign_up = () => {
    navigation.navigate("SignUpScreen"); // Navigate to SignUpScreen
  };
  return (
    <PrimaryView style={styles.primaryStyles}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={{ alignItems: "center" }}>
              <Logo style={styles.logoStyle} />
            </View>
            <Text style={styles.text1}>Flexibility with ease</Text>
          </View>
          <View style={styles.bottomTextCover}>
            <Text style={styles.bottomText}>
              Join 100 milion Nigerians, to explore the best finacial system in
              Nigeria.
            </Text>
            <View style={styles.btnCover}>
              <PrimaryButton
                onPress={handle_login}
                button_title={"Login"}
                container_style={styles.containerStyles1}
                text_style={styles.textStyles1}
              />
              <PrimaryButton
                onPress={handle_sign_up}
                button_title={"Sign Up"}
                container_style={styles.containerStyles2}
                text_style={styles.textStyles2}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </PrimaryView>
  );
};

export default SplashIntroScreen;
