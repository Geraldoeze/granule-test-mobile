// React and React Native imports
import React, { useEffect, useRef, useState } from "react";
import { Animated, Button, Linking, Pressable, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IconButton, TextInput } from "@react-native-material/core";

// Third-party libraries
import Icon from "react-native-vector-icons/Octicons";

// Project constants
import { Colors, useTheme } from "../../../constants/colors";

// Project components
import PrimaryButton from "../../../components/display/PrimaryButton";
import AuthBackground from "../../../components/display/AuthBackground";
import AuthBackBtn from "../../../components/display/AuthBackBtn";
import {
  RootStackParamList,
  useAppNavigation,
} from "../../../navigation/MainStack";

import VerifyInfoOne from "../../../components/authentication/verify-information/VerifyInfoOne";
import VerifyInfoTwo from "../../../components/authentication/verify-information/VerifyInfoTwo";

// Styles
import styles from "./style";
import VerifyInfoThree from "../../../components/authentication/verify-information/VerifyInfoThree";
import VerifyInfoFour from "../../../components/authentication/verify-information/VerifyInfoFour";

type VerifyInformationProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyInformation"
>;

const VerifyInformation: React.FC<VerifyInformationProps> = ({ route }) => {
  const navigation = useAppNavigation();
  const theme = useTheme();

  const [informaton, setInformation] = useState(1);

  const handleNavigationClick = () => {};

  const handleBackClick = () => {
    if (informaton === 1) {
      navigation.goBack();
    } else if (informaton === 2) {
      setInformation(1);
    } else if (informaton === 3) {
      setInformation(2);
    } else if (informaton === 4) {
      setInformation(3);
    } 
  };

  const handleNextPage = (page: number) => {
    setInformation(page);
  };
  return (
    <View style={{ flex: 1 }}>
      <AuthBackground>
        <AuthBackBtn onpress={handleBackClick} />

        {informaton === 1 && <VerifyInfoOne handleNextPage={handleNextPage} />}
        {informaton === 2 && <VerifyInfoTwo handleNextPage={handleNextPage} />}
        {informaton === 3 && (
          <VerifyInfoThree handleNextPage={handleNextPage} />
        )}
        {informaton === 4 && <VerifyInfoFour handleNextPage={handleNextPage} />}
      </AuthBackground>
    </View>
  );
};

export default VerifyInformation;
