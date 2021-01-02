import React from "react";

// Custom Components
import { HeaderTitle, headerOptions, TabLabel } from "./components";

// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Navigation Types
import { HomeTabsParamList, FriendsStackParamList } from "../types";

// Screen Components
import FriendsListScreen from "../screens/FriendsListScreen";
import PlayScreen from "../screens/PlayScreen";

// Styling
import StyleGuide from "../StyleGuide";

// Create Stack Navigator
const FriendsStack = createStackNavigator<FriendsStackParamList>();

function FriendsStackNavigator() {
  return (
    <FriendsStack.Navigator initialRouteName="FriendsList">
      <FriendsStack.Screen
        name="FriendsList"
        component={FriendsListScreen}
        options={{
          headerTitle: () => HeaderTitle({ title: "Friends List" }),
          ...headerOptions,
        }}
      />
    </FriendsStack.Navigator>
  );
}

// Create Bottom Tab Navigator
const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabs.Navigator
      initialRouteName="Friends"
      tabBarOptions={{
        activeTintColor: StyleGuide.colors.text,
        style: {
          backgroundColor: StyleGuide.colors.background2,
          borderTopWidth: 0,
        },
      }}
    >
      <HomeTabs.Screen
        name="Friends"
        component={FriendsStackNavigator}
        options={{
          tabBarLabel: ({ focused }) => TabLabel({ title: "Friends", focused }),
        }}
      />
      <HomeTabs.Screen
        name="Play"
        component={PlayScreen}
        options={{
          tabBarLabel: ({ focused }) => TabLabel({ title: "Play", focused }),
        }}
      />
    </HomeTabs.Navigator>
  );
}

export default HomeTabNavigator;
