import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Navigation Types
import { AuthStackParamList } from "../types";

// Screen Components
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

// Create Stack Navigator
const AuthStack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
