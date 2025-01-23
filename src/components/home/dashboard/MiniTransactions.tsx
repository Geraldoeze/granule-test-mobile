import { View, Text, ScrollView } from "react-native";
import React from "react";
import DebitIcon from "../../../../assets/icons/dashboard/debit_icon.svg";
import CreditIcon from "../../../../assets/icons/dashboard/credit_icon.svg";
import { useTheme } from "../../../constants/colors";

const data = [
  {
    type: "credit",
    amount: "+ ₦ 10,000.00",
    date: "Jan 10th, 02:38:33",
    title: "Transfer from Joe Mettle",
    status: "Successful",
  },
  {
    type: "debit",
    amount: "- ₦ 10,000.00",
    date: "Jan 10th, 02:38:33",
    title: "Transfer from Joe Mettle",
    status: "Failed",
  },
];

const MiniTransactions = () => {
  const theme = useTheme();
  return (
    <View style={{ marginVertical: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          
        }}
      >
        <Text
          style={{
            color: theme.dark,
            fontSize: 16,
            fontFamily: "Outfit Regular",
          }}
        >
          Transactions
        </Text>
        <Text
          style={{
            color: theme.primary,
            fontSize: 16,
            fontFamily: "Outfit Regular",
          }}
        >
          See all
        </Text>

      </View>
      <ScrollView>
        {data?.map((info: any, index: number) => (
          <View key={index} style={{ marginVertical: 10 }}>
            {handleTransaction({ data: info })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const handleTransaction = ({ data }: any) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        {data.type === "credit" ? <CreditIcon /> : <DebitIcon />}
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              color: theme.dark,
              fontSize: 14,
              fontFamily: "Outfit Medium",
            }}
          >
            {data.title}
          </Text>
          <Text
            style={{
              color: theme.dark,
              fontSize: 11,
              fontFamily: "Outfit Regular",
            }}
          >
            {data.date}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Text
          style={{
            color: theme.dark,
            fontSize: 12,
            fontFamily: "Outfit Medium",
          }}
        >
          {data.amount}
        </Text>
        <Text
          style={{
            color: statusColor(data.status),
            fontSize: 11,
            fontFamily: "Outfit Regular",
          }}
        >
          {data.status}
        </Text>
      </View>
    </View>
  );
};

const statusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "successful":
      return "#00A650";
    case "failed":
      return "#FF0000";
    case "pending":
      return "#F89406";
    default:
      return "#00A650";
  }
};

export default MiniTransactions;
