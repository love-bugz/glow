// Root Stack Param List

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// init = AuthLoading
export type RootStackParamList = {
  AuthLoading: undefined; //screen
  Home: undefined; //tabs
  Auth: undefined; //stack
};

//init = friends
export type HomeTabsParamList = {
  Friends: undefined; //stack
  Play: undefined; //screen
};

//init = login
export type AuthStackParamList = {
  Login: undefined; //screen
  Register: undefined; //screen
};

//
export type FriendsStackParamList = {
  FriendsList: undefined; //screen
};

// Navigation prop type for each screen of Home (Friends, Play)
export type HomeStackNavigationProp = BottomTabNavigationProp<
  HomeTabsParamList,
  "Friends"
>;

// Navigation prop type for each screen of Auth (Login, Register)
export type AuthStackNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;

// Navigation prop type for each screen of Root (AuthLoading, Auth, Home)
export type RootStackNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, "AuthLoading">,
  BottomTabNavigationProp<HomeTabsParamList>
>;
