import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./MainStack";
import HomeScreen from "../screens/Dashboard/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransferIcon from "../../assets/icons/navigation/Transfer.svg";
import TransferColor from "../../assets/icons/navigation/Transfer_color.svg";
import HomeColor from "../../assets/icons/navigation/Home_color.svg";
import Home from "../../assets/icons/navigation/Wallet.svg";
import CardIcon from "../../assets/icons/navigation/Card.svg";
import ProductIcon from "../../assets/icons/navigation/Product.svg";
import UserIcon from "../../assets/icons/navigation/User.svg";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import TransferScreen from "../screens/Dashboard/TransferScreen";

type MyTabBarProps = BottomTabBarProps;

type TabParamList = {
  Home: undefined;
  Transfer: undefined;
  Settings: undefined;
  // Add other tab screens as needed
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

// Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        animation: "fade",
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          // Determine which icon to show based on route.name and focus state
          if (route.name === "Home") {
            const Icon = focused ? HomeColor : Home;
            return <Icon width={22} height={23} />;
          } else if (route.name === "Transfer") {
            const Icon = focused ? TransferColor : TransferIcon;
            return <Icon width={22} height={23} />;
          } else if (route.name === "Settings") {
            const Icon = focused ? TransferIcon : TransferIcon;
            return <Icon width={22} height={23} fill={"#EC0C27"} />;
          }
        },
        tabBarActiveTintColor: "#EC0C27", // Active icon color
        tabBarInactiveTintColor: "#9E9E9E", // Inactive icon color
        tabBarLabelStyle: { fontFamily: "Outfit Regular", fontSize: 12 },
        tabBarStyle: {
          borderTopColor: "#3D3E3E1A",
          borderTopWidth: 1,
          backgroundColor: "#1516160A",
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transfer" component={TransferScreen} />
    </Tab.Navigator>
  );
};

const DashboardStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={TabNavigator} />
    {/* Add other authenticated stack screens here */}
  </Stack.Navigator>
);

export default DashboardStackScreen;
