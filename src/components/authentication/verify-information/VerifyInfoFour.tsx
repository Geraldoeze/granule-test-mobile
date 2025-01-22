import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import PrimaryButton from "../../display/PrimaryButton";
import { Colors, useTheme } from "../../../constants/colors";
import { TextInput } from "@react-native-material/core";
import CustomSelectInput from "./SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { useBottomSheet } from "../../../hooks/BottomSheetProvider";
import {
  SelectIncome,
  SelectOccupation,
  SelectOtherIncomeSource,
} from "./SelectContent";
import {
  selectAddressInfo,
  selectAuthenticatData,
  selectPersonalInfo,
  selectPoliticalInfo,
} from "../../../store/signup/selectors";
import { showFlashMessage } from "../../../utils/flash-message";
import { useMutation } from "@tanstack/react-query";
import { apiCompleteProfile } from "../../../api/authentication";
import { CompleteProfileProps } from "../../../interface/authenticattion";
import { getFirstErrorMessage } from "../../../utils/sub-functions";
import { useAppNavigation } from "../../../navigation/MainStack";
// Third-party Libraries
import Icon from "react-native-vector-icons/Octicons";
import { useToast } from "../../../hooks/useToast";
import { ToastWrapper } from "../../display/ToastWrapper";

const VerifyInfoFour = ({
  handleNextPage,
}: {
  handleNextPage: (id: number) => void;
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useAppNavigation();
  const { visible, slideAnim, showToast, hideToast } = useToast();

  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const personalInfo = useSelector(selectPersonalInfo);
  const politicalInfo = useSelector(selectPoliticalInfo);
  const addressInfo = useSelector(selectAddressInfo);
  const authenticationData = useSelector(selectAuthenticatData);

  const handleCloseBottomSheet = () => {
    closeBottomSheet();
  };
  const handleOpenBottomSheetOccupation = () => {
    openBottomSheet(
      <SelectOccupation closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  const handleOpenBottomSheetIncome = () => {
    openBottomSheet(
      <SelectIncome closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };
  const handleOpenBottomSheetSources = () => {
    openBottomSheet(
      <SelectOtherIncomeSource closeBottomSheet={handleCloseBottomSheet} />,
      ["25%", "50%", "90%"] // Custom snap points
    );
  };

  const mutation = useMutation({
    mutationFn: (values: CompleteProfileProps) => apiCompleteProfile(values),
    onSuccess: (data) => {
      if (data?.status === "error") {
        if ("msg" in data) {
          showFlashMessage({
            message: data?.msg,
            description: getFirstErrorMessage(data.errors),
            type: "danger",
          });
          return;
        }
        return;
      }
      if (data.status === 200) {
        showFlashMessage({
          message: "Success",
          description: data?.data?.message || "",
          type: "success",
        });
        showToast();
      }
    },
    onError: () => {
      showFlashMessage({
        message: "Request failed",
        description: "Server error",
        type: "danger",
      });
    },
  });
  const handleSubmit = () => {
    showToast();
    return;
    const values = {
      email: authenticationData.email,
      verification_id: personalInfo.verification_id,
      verification_type: personalInfo.verification_type.toLowerCase(),
      country: addressInfo.country,
      state: addressInfo.state,
      address: addressInfo.address,
      lga: addressInfo.lga,
      area: addressInfo.area,
      occupation: personalInfo.occupation,
      annual_income: personalInfo.annualIncomeRange,
      other_income_sources: personalInfo.otherIncomeSource,
      political_person: politicalInfo.politicalFigure,
      political_current_past: "",
      political_office: "",
      political_office_date: "",
      currently_holding: false,
      related_to_political: "No",
    };
    mutation.mutate(values);
  };
  return (
    <View style={styles.backCover}>
      <View style={{ height: "80%" }}>
        <Text style={[styles.text, { color: theme.auth_text1 }]}>
          Source of income
        </Text>
        <Text style={[styles.text1, { color: theme.auth_text2 }]}>
          Provide more details on your source(s) of income
        </Text>
        <ScrollView style={{ flex: 1 }}>
          <CustomSelectInput
            label={"Occupation"}
            inputLabel={"Select occupation"}
            value={personalInfo.occupation}
            onPress={handleOpenBottomSheetOccupation}
          />
          <CustomSelectInput
            label={"Annual income"}
            inputLabel={"Select range"}
            value={personalInfo.annualIncomeRange}
            onPress={handleOpenBottomSheetIncome}
          />
          <CustomSelectInput
            label={"Do you have other sources of income?"}
            inputLabel={"Select "}
            value={personalInfo.otherIncomeSource}
            onPress={handleOpenBottomSheetSources}
          />
        </ScrollView>
      </View>

      <View style={{}}>
        <PrimaryButton
          onPress={handleSubmit}
          button_title={"Next"}
          container_style={{
            borderRadius: 16,
            marginVertical: 10,
            backgroundColor: Colors.general.primary,
          }}
          text_style={{ color: "white" }}
        />
        {mutation.isPending && (
          <ActivityIndicator
            style={{ marginBottom: 10, alignSelf: "center" }}
            color={Colors.general.primary}
            size="small"
          />
        )}
      </View>
      <ToastWrapper visible={visible} slideAnim={slideAnim}>
        <AccountCreated close_handler={hideToast} />
      </ToastWrapper>
    </View>
  );
};

const AccountCreated = ({ close_handler }: { close_handler: () => void }) => {
  const theme = useTheme();
  const navigation = useAppNavigation();

  const handleNavigation = () => {
    close_handler();
    navigation.navigate("SignInScreen");
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
          Account Creation Successful
        </Text>
        <Text style={[styles.text6, { color: theme.dark }]}>
          Your have successfully created your Granule account
        </Text>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <PrimaryButton
          onPress={handleNavigation}
          button_title={"Sign In"}
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
export default VerifyInfoFour;

const styles = StyleSheet.create({
  backCover: {
    marginVertical: 20,
    paddingHorizontal: 20,
    height: "82%",
    flexDirection: "column",
    justifyContent: "space-between",
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
    marginVertical: 4,
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
