import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./MainStack";
import HomeScreen from "../screens/Dashboard/HomeScreen"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransferIcon from "../../assets/icons/navigation/Transfer.svg";
import CardIcon from "../../assets/icons/navigation/Card.svg";
import ProductIcon from "../../assets/icons/navigation/Product.svg";
import UserIcon from "../../assets/icons/navigation/User.svg";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

type MyTabBarProps = BottomTabBarProps;

type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  // Add other tab screens as needed
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff", // Adjust as needed
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});

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
            const Icon = focused ? UserIcon : ProductIcon;
            return (
              <Icon width={22} height={23} fill={focused ? color : "#EC0C27"} />
            );
          } else if (route.name === "Profile") {
            const Icon = focused ? TransferIcon : TransferIcon;
            return <Icon width={22} height={23} />;
          } else if (route.name === "Settings") {
            const Icon = focused ? TransferIcon : TransferIcon;
            return <Icon width={22} height={23} fill={"#EC0C27"} />;
          }
        },
        tabBarActiveTintColor: "#EC0C27", // Active icon color
        tabBarInactiveTintColor: "#9E9E9E", // Inactive icon color
        tabBarLabelStyle: { fontFamily: "Outfit Medium" },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={TabNavigator} />
    {/* Add other authenticated stack screens here */}
  </Stack.Navigator>
);

export default HomeStackScreen;
