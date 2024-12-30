/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-reanimated";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigation/MainStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetProvider from "./src/hooks/BottomSheetProvider";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
