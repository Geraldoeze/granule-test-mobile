import { View, Text } from "react-native";
import React from "react";
import DashboardBackground from "../../components/display/DashboardBackground";

const TransferScreen = () => {
  return (
    <View>
      <DashboardBackground>
        <View style={{ height: "100%", width: "100%" }}>
          <Text>Transfer screen</Text>
        </View>
      </DashboardBackground>
    </View>
  );
};


export default TransferScreen;
