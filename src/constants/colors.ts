/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { useColorScheme } from "react-native";

export const Colors = {
  general: {
    primary: "#EC0C27",
    secondary: "#17314B",
    dark: "#373737",
    error: "#E43F40",
    success: "#00BA88",
    title_active: "#292925",
    body: "#292925CC",
    label: "#3E3E3B",
    line: "#88CB2F19",
    input_background: "#3E3E3B4D",
    background: "#F7F7FC",
    off_white: "#FCFCFC",
    light_background: "#F9F6FB",
    white: "#FFFFFF",
    black: "#000000",
  },
  light: {
    light_background: "#F9F6FB",
    light_bg: "#A7A7A71A",
    auth_text1: "#1A0E2C",
    auth_text2: "#8C8CA1",
    auth_text3: "#BEBEBE",
    primary: "#EC0C27",
    secondary: "#17314B",
    dark: "#373737",
    input_color: "#4A4A68",
  },
  dark: {
    light_background: "#F9F6FB",
    light_bg: "#A7A7A71A",
    auth_text1: "#1A0E2C",
    auth_text2: "#8C8CA1",
    auth_text3: "#BEBEBE",
    primary: "#EC0C27",
    secondary: "#17314B",
    dark: "#373737",
    input_color: "#4A4A68",
  },
};

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? Colors.dark : Colors.light;
};

// You can also export a type for TypeScript support
export type Theme = typeof Colors.light;
