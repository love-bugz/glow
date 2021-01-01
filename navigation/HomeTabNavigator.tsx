import React from "react";

// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Navigation Types
import { HomeTabsParamList, FriendsStackParamList } from "../types";

// Screen Components
import FriendsListScreen from "../screens/FriendsListScreen";
import Play from "../screens/PlayScreen";
import PlayScreen from "../screens/PlayScreen";

// Create Stack Navigator
const FriendsStack = createStackNavigator<FriendsStackParamList>();

function FriendsStackNavigator() {
  return (
    <FriendsStack.Navigator initialRouteName="FriendsList">
      <FriendsStack.Screen name="FriendsList" component={FriendsListScreen} />
    </FriendsStack.Navigator>
  );
}

// Create Bottom Tab Navigator
const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabs.Navigator initialRouteName="Friends">
      <HomeTabs.Screen name="Friends" component={FriendsStackNavigator} />
      <HomeTabs.Screen name="Play" component={PlayScreen} />
    </HomeTabs.Navigator>
  );
}

export default HomeTabNavigator;
