import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Navigation Types
import { RootStackParamList } from "../types";

// Screen & Navigation Components
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import AuthStackNavigator from "./AuthStackNavigator";
import HomeTabNavigator from "./HomeTabNavigator";

// Create Root Navigator
const RootStack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="AuthLoading">
        <RootStack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        <RootStack.Screen name="Home" component={HomeTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
