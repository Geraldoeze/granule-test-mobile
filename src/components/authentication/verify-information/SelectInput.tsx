import { IconButton, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, useTheme } from "../../../constants/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDateFromString } from "../../../utils/sub-functions";
import CheckBox from "react-native-check-box";
import { useDispatch } from "react-redux";
import { updatePoliticalInfo } from "../../../store/signup/slice";

type SelectInput = {
  label: string;
  inputLabel: string;
  value: string;
  onPress: () => void;
};

const CustomSelectInput = ({
  label,
  inputLabel,
  value,
  onPress,
}: SelectInput) => {
  const theme = useTheme();

  return (
    <View style={styles.contain} testID="input-container">
      <Text style={[styles.text, { color: theme.label }]}>{label}</Text>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.textCover}>
          <Text
            style={{
              fontFamily: "Outfit Medium",
              color: !!value ? "black" : theme.label,
              fontSize: 16,
            }}
          >
            {!!value ? value : inputLabel}
          </Text>
          <Ionicons
            name={"chevron-down"}
            size={24}
            // color={Colors.general.primary}
            color={"#2F3233"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const CustomSelectDate = ({ label, inputLabel, value }: SelectInput) => {
  const theme = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const main = formatDateFromString(date?.toString());
    setSelectedDate(main);
    dispatch(updatePoliticalInfo({ politicalOfficeDate: main }));
    hideDatePicker();
  };

  const handleCurrentPosition = () => {
    dispatch(updatePoliticalInfo({ currentlyHoldingPosition: !checked }));
    setChecked(!checked);
  };
  return (
    <View style={styles.contain} testID="input-container">
      <Text style={[styles.text, { color: theme.label }]}>{label}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date" // Can be "date", "time", or "datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.textCover}>
          <Text
            style={{
              fontFamily: "Outfit Medium",
              color: !!value ? "black" : theme.label,
              fontSize: 16,
            }}
          >
            {!!selectedDate ? selectedDate : inputLabel}
          </Text>
          <Ionicons
            name={"chevron-down"}
            size={24}
            // color={Colors.general.primary}
            color={"#2F3233"}
          />
        </View>
      </TouchableOpacity>
      <CheckBox
        style={{ flex: 1, padding: 10 }}
        onClick={handleCurrentPosition}
        isChecked={checked}
        rightText={"I currently hold this position"}
        rightTextStyle={[styles.text, { color: theme.label }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Outfit Medium",
  },
  textCover: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputStyle: {
    fontFamily: "Outfit Regular",
    fontSize: 18,
  },
});
export default CustomSelectInput;
