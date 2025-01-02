/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import "react-native-reanimated";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigation/MainStack";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BottomSheetProvider from "./src/hooks/BottomSheetProvider";

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
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetProvider>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </BottomSheetProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
