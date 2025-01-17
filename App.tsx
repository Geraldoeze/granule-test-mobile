/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import "react-native-reanimated";

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigation/MainStack";
import SplashScreen from "react-native-splash-screen";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BottomSheetProvider from "./src/hooks/BottomSheetProvider";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Recommended options for mobile apps
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
});

function App(): React.JSX.Element {
  useEffect(() => {
    if (Platform.OS === "android") SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetProvider>
              <NavigationContainer>
                <MainStack />
              </NavigationContainer>
            </BottomSheetProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
