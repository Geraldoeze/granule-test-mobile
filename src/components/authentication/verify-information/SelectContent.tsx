import { TouchableOpacity, View } from "react-native";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddressInfo,
  selectPersonalInfo,
} from "../../../store/signup/selectors";
import {
  updateAddressInfo,
  updatePersonalInfo,
  updatePoliticalInfo,
} from "../../../store/signup/slice";
import { getAllLGAsInState, getAllStates } from "../../../utils/nigeria-states";
import {
  annualIncomeRanges,
  occupationCategories,
  politicalOfficesInNigeria,
} from "../../../interface/data";


{
  /* Add more content to demonstrate scrolling */
}
//    {Array.from({ length: 20 }).map((_, index) => (
//     <Text key={index} style={styles.contentText}>
//       Item {index + 1}
//     </Text>
//   ))}

type SelectCounryProps = {
  closeBottomSheet: () => void;
};
export const SelectCountry = ({ closeBottomSheet }: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = () => {
    dispatch(updateAddressInfo({ country: "Nigeria" }));
    closeBottomSheet();
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select Country!</Text>
      {/* Add more content to demonstrate scrolling */}
      <TouchableOpacity onPress={handleSelectedValue}>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.contentText}>Nigeria </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const SelectStates = ({ closeBottomSheet }: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (state: string) => {
    dispatch(updateAddressInfo({ state: state }));
    closeBottomSheet();
  };
  const states = getAllStates();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select State!</Text>
      {/* Add more content to demonstrate scrolling */}

      {states?.map((state, index) => (
        <TouchableOpacity
          key={index * 77}
          onPress={() => handleSelectedValue(state)}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.contentText}>{state} </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export const SelectLga = ({ closeBottomSheet }: SelectCounryProps) => {
  const dispatch = useDispatch();
  const addressInfo = useSelector(selectAddressInfo);

  const handleSelectedValue = (lga: string) => {
    dispatch(updateAddressInfo({ lga: lga }));
    closeBottomSheet();
  };
  const lgas = getAllLGAsInState(addressInfo.state);
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>
        Kindly Select Local Goverment in {addressInfo.state}!
      </Text>
      {/* Add more content to demonstrate scrolling */}

      {lgas?.map((lga, index) => (
        <TouchableOpacity
          key={index * 77}
          onPress={() => handleSelectedValue(lga)}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.contentText}>{lga} </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export const SelectOccupation = ({ closeBottomSheet }: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (occpation: string) => {
    dispatch(updatePersonalInfo({ occupation: occpation }));
    closeBottomSheet();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select Occupation!</Text>
      {/* Add more content to demonstrate scrolling */}

      {occupationCategories?.map((item, index) => (
        <TouchableOpacity
          key={index * 77}
          onPress={() => handleSelectedValue(item)}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.contentText}>{item} </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export const SelectIncome = ({ closeBottomSheet }: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (income: string) => {
    dispatch(updatePersonalInfo({ annualIncomeRange: income }));
    closeBottomSheet();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select Annual Income!</Text>
      {/* Add more content to demonstrate scrolling */}

      {annualIncomeRanges?.map((item, index) => (
        <TouchableOpacity
          key={index * 77}
          onPress={() => handleSelectedValue(item)}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.contentText}>{item} </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export const SelectOtherIncomeSource = ({
  closeBottomSheet,
}: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (income: string) => {
    dispatch(updatePersonalInfo({ otherIncomeSource: income }));
    closeBottomSheet();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select!</Text>
      {/* Add more content to demonstrate scrolling */}

      <TouchableOpacity onPress={() => handleSelectedValue("Yes")}>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.contentText}>Yes </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectedValue("No")}>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.contentText}>No </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const SelectPolitical = ({ closeBottomSheet }: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (value: string) => {
    dispatch(updatePoliticalInfo({ politicalPosition: value }));
    closeBottomSheet();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select!</Text>
      {/* Add more content to demonstrate scrolling */}

      <TouchableOpacity onPress={() => handleSelectedValue("Yes")}>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.contentText}>Yes </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectedValue("No")}>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.contentText}>No </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const SelectPoliticalOffice = ({
  closeBottomSheet,
}: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (value: string) => {
    dispatch(updatePoliticalInfo({ politicalOffice: value }));
    closeBottomSheet();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select Political Office!</Text>
      {/* Add more content to demonstrate scrolling */}

      {politicalOfficesInNigeria?.map((item, index) => (
        <TouchableOpacity
          key={index * 77}
          onPress={() => handleSelectedValue(item)}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.contentText}>{item} </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export const SelectOfficeStartDate = ({
  closeBottomSheet,
}: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (value: string) => {
    dispatch(updatePoliticalInfo({ politicalRelations: value }));
    closeBottomSheet();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select!</Text>
      {/* Add more content to demonstrate scrolling */}

      
    </ScrollView>
  );
};
export const SelectPoliticalRelations = ({
  closeBottomSheet,
}: SelectCounryProps) => {
  const dispatch = useDispatch();

  const handleSelectedValue = (value: string) => {
    dispatch(updatePoliticalInfo({ politicalRelations: value }));
    closeBottomSheet();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.contentText}>Kindly Select!</Text>
      {/* Add more content to demonstrate scrolling */}

      <TouchableOpacity onPress={() => handleSelectedValue("Yes")}>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.contentText}>Yes </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelectedValue("No")}>
        <View
          style={{
            backgroundColor: "lightgray",
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.contentText}>No </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 16,

    fontFamily: "Outfit Medium",
  },
});
