import React from "react";
import { Text } from "react-native";
// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, Header } from "@react-navigation/stack";

// Navigation Types
import { HomeTabsParamList, FriendsStackParamList } from "../types";

// Screen Components
import FriendsListScreen from "../screens/FriendsListScreen";
import PlayScreen from "../screens/PlayScreen";

import StyleGuide from "../StyleGuide";

const headerTitle = (title: string) => (
  <Text
    style={{ fontSize: 24, fontWeight: "400", color: StyleGuide.colors.text }}
  >
    {title}
  </Text>
);

const headerOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: StyleGuide.colors.background2,
    height: 100,
    shadowColor: StyleGuide.colors.background4,
  },
};

// Create Stack Navigator
const FriendsStack = createStackNavigator<FriendsStackParamList>();

function FriendsStackNavigator() {
  return (
    <FriendsStack.Navigator initialRouteName="FriendsList">
      <FriendsStack.Screen
        name="FriendsList"
        component={FriendsListScreen}
        options={{
          headerTitle: () => headerTitle("Friends List"),
          ...headerOptions,
        }}
      />
    </FriendsStack.Navigator>
  );
}

interface TabLabelProps {
  title: string;
  focused: boolean;
}

const TabLabel = ({ title, focused }: TabLabelProps) => (
  <Text
    style={{
      fontSize: 18,
      fontFamily: "Permanent-Marker",
      color: focused ? StyleGuide.colors.text2 : StyleGuide.colors.text4,
    }}
  >
    {title}
  </Text>
);

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
