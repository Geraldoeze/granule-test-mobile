import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import PrimaryButton from "../../display/PrimaryButton";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput } from "@react-native-material/core";
import CustomSelectInput, { CustomSelectDate } from "./SelectInput";
import { useSelector } from "react-redux";
import { selectPoliticalInfo } from "../../../store/signup/selectors";
import { useBottomSheet } from "../../../hooks/BottomSheetProvider";
import {
  SelectOfficeStartDate,
  SelectPolitical,
  SelectPoliticalOffice,
  SelectPoliticalRelations,
} from "./SelectContent";
import { useToast } from "../../../hooks/useToast";
import { ToastWrapper } from "../../display/ToastWrapper";

// Third-party Libraries
import Icon from "react-native-vector-icons/Octicons";

const VerifyInfoThree = ({
  handleNextPage,
}: {
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();
  const { visible, slideAnim, showToast, hideToast } = useToast();

  const politicalInfo = useSelector(selectPoliticalInfo);
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const handleCloseBottomSheet = () => {
    closeBottomSheet();
  };
  const handleOpenBottomSheetPolitical = () => {
    openBottomSheet(
      <SelectPolitical closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  const handleOpenBottomSheetOffice = () => {
    openBottomSheet(
      <SelectPoliticalOffice closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  const handleOpenBottomSheetRelations = () => {
    openBottomSheet(
      <SelectPoliticalRelations closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  const handleOpenBottomSheetDate = () => {
    openBottomSheet(
      <SelectOfficeStartDate closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  return (
    <View style={styles.backCover}>
      <View style={{ height: "80%" }}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          PEP Status
        </Text>
        <Text style={[styles.text1, { color: theme.auth_text2 }]}>
          Please make sure that you provide accurate information. Providing
          false information may affect your access
        </Text>

        <ScrollView style={{}}>
          <CustomSelectInput
            label={"Are you a current or past political office holder?"}
            inputLabel={"Select option"}
            value={politicalInfo.politicalPosition}
            onPress={handleOpenBottomSheetPolitical}
          />
          <CustomSelectInput
            label={"Select political office"}
            inputLabel={"Select option"}
            value={politicalInfo.politicalOffice}
            onPress={handleOpenBottomSheetOffice}
          />
          <CustomSelectDate
            label={"Office start date"}
            inputLabel={"Select option"}
            value={politicalInfo.politicalRelations}
            onPress={() => {}}
          />
          <CustomSelectInput
            label={"Are related to a current or past political office holder?"}
            inputLabel={"Select option"}
            value={politicalInfo.politicalRelations}
            onPress={handleOpenBottomSheetRelations}
          />
        </ScrollView>
      </View>

      <View style={{}}>
        <PrimaryButton
          onPress={showToast}
          button_title={"Next"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
      </View>
      <ToastWrapper visible={visible} slideAnim={slideAnim}>
        <ConfirmInformation
          close_handler={hideToast}
          handleNextPage={handleNextPage}
        />
      </ToastWrapper>
    </View>
  );
};

const ConfirmInformation = ({
  close_handler,
  handleNextPage,
}: {
  close_handler: () => void;
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();

  const handleNavigation = () => {
    close_handler();
    handleNextPage(4);
  };
  return (
    <View
      style={[
        styles.confirmInfo,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <Icon name="check-circle-fill" size={110} color="#31D0AA" />
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.text5, { color: theme.auth_text1 }]}>
          Confirm information
        </Text>
        <Text style={[styles.text6, { color: theme.dark }]}>
          Are you sure the information you privided are right?
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <PrimaryButton
          onPress={close_handler}
          button_title={"no"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            width: 140,
            backgroundColor: "#EC0C271A",
          }}
          text_style={{ color: Colors.general.primary }}
        />
        <PrimaryButton
          onPress={handleNavigation}
          button_title={"Yes"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            width: 140,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
      </View>
    </View>
  );
};
export default VerifyInfoThree;

const styles = StyleSheet.create({
  backCover: {
    marginVertical: 20,
    paddingHorizontal: 20,
    height: "82%",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },

  text: { fontFamily: "Outfit Bold", fontSize: 36, marginBottom: 10 },
  text1: {
    fontSize: 18,
    fontFamily: "Outfit Regular",
  },
  text2: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
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
    marginVertical: 16,
  },
  inputStyle: {
    fontFamily: "Outfit Medium",
    fontSize: 18,
  },
  confirmInfo: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
    width: "100%",
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
