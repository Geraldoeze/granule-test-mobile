import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../display/PrimaryButton";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput } from "@react-native-material/core";
import { useBottomSheet } from "../../../hooks/BottomSheetProvider";
import CustomSelectInput from "./SelectInput";
import { SelectCountry, SelectLga, SelectStates } from "./SelectContent";
import { useDispatch, useSelector } from "react-redux";
import { selectAddressInfo } from "../../../store/signup/selectors";
import { updateAddressInfo } from "../../../store/signup/slice";
import { showFlashMessage } from "../../../utils/flash-message";

const VerifyInfoOne = ({
  handleNextPage,
}: {
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const addressInfo = useSelector(selectAddressInfo);
  const [userInfo, setUserInfo] = useState({
    area: addressInfo.area ?? "",
    address: addressInfo?.address ?? "",
  });
  const handleCloseBottomSheet = () => {
    closeBottomSheet();
  };
  const handleOpenBottomSheetCountry = () => {
    openBottomSheet(
      <SelectCountry closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  const handleOpenBottomSheetState = () => {
    openBottomSheet(
      <SelectStates closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  const handleOpenBottomSheetLga = () => {
    openBottomSheet(
      <SelectLga closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };

  const handleNext = () => {
    if (!userInfo.area || !userInfo.address) {
      showFlashMessage({
        message: "Input Errors",
        description: "Please provide your address/area",
        type: "warning",
      });
      return;
    }

    dispatch(
      updateAddressInfo({ area: userInfo.area, address: userInfo.address })
    );
    handleNextPage(2);
  };
  return (
    <View style={styles.backCover}>
      <View style={{ height: "80%" }}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Residential Address
        </Text>
        <ScrollView style={{ flex: 1 }}>
          <CustomSelectInput
            label={"Country"}
            inputLabel={"Select country"}
            value={addressInfo.country}
            onPress={handleOpenBottomSheetCountry}
          />
          <CustomSelectInput
            label={"State"}
            inputLabel={"Select state"}
            value={addressInfo.state}
            onPress={handleOpenBottomSheetState}
          />
          <CustomSelectInput
            label={"LGA"}
            inputLabel={"Select LGA"}
            value={addressInfo.lga}
            onPress={handleOpenBottomSheetLga}
          />
          <View style={styles.inputCover}>
            <Text
              style={[
                styles.text2,
                {
                  color: Colors.light.label,
                },
              ]}
            >
              Area
            </Text>
            <TextInput
              variant="standard"
              label=""
              value={userInfo.area}
              onChangeText={(area) =>
                setUserInfo((prev) => ({ ...prev, area: area }))
              }
              placeholder="Type in your area"
              color={Colors.general.primary}
              placeholderTextColor={Colors.light.label}
              inputStyle={styles.inputStyle}
            />
          </View>
          <View style={styles.inputCover}>
            <Text
              style={[
                styles.text2,
                {
                  color: Colors.light.label,
                },
              ]}
            >
              Address
            </Text>
            <TextInput
              variant="standard"
              label=""
              value={userInfo.address}
              onChangeText={(address) =>
                setUserInfo((prev) => ({ ...prev, address: address }))
              }
              placeholder="Type in your address"
              color={Colors.general.primary}
              placeholderTextColor={Colors.light.label}
              inputStyle={styles.inputStyle}
            />
          </View>
        </ScrollView>
      </View>

      <View style={{}}>
        <PrimaryButton
          onPress={handleNext}
          button_title={"Next"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
      </View>
    </View>
  );
};

export default VerifyInfoOne;

const styles = StyleSheet.create({
  backCover: {
    marginVertical: 20,
    paddingHorizontal: 20,
    height: "83%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

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

  inputCover: {
    marginVertical: 16,
  },
  inputStyle: {
    fontFamily: "Outfit Medium",
    fontSize: 18,
  },

  scrollViewContent: {
    padding: 20,
  },
  contentText: {
    marginBottom: 10,
    fontSize: 16,
  },
});
