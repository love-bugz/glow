import React from "react";
import useCachedResources from "./hooks/useCachedResources";

import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
}
