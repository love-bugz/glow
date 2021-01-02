import React from "react";

// Hooks
import useCachedResources from "./hooks/useCachedResources";

// Navigation
import AppNavigator from "./navigation";

// Store
import { store } from "./store";
import { Provider } from "react-redux";

// Third Party Libraries
import { SafeAreaProvider } from "react-native-safe-area-context";

// EXPORTED COMPONENT ------------------------
export default function App() {
  // use custom hook to load resources
  const isLoadingComplete = useCachedResources();

  // wait for resources to load before loading app
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
