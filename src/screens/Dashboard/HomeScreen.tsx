import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import DashboardBackground from "../../components/display/DashboardBackground";
import TopHeader from "../../components/home/dashboard/TopHeader";
import Cover from "../../components/home/dashboard/Cover";
import Shortcuts from "../../components/home/dashboard/Shortcuts";
import Advert from "../../components/home/dashboard/Advert";
import MiniTransactions from "../../components/home/dashboard/MiniTransactions";

const HomeScreen = () => {
  return (
    <DashboardBackground>
      <TopHeader />
      <Cover />
      <Shortcuts />
      <Advert />
      <MiniTransactions />
    </DashboardBackground>
  );
};

export default HomeScreen;
