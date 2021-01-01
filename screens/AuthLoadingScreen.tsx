import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { RootStackNavigationProp } from "../types";

const AuthLoadingScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const token = "123456789";
  const [hasToken, setHasToken] = useState(false);

  const setToken = async () => {
    await AsyncStorage.setItem("user_token", token);
    setHasToken(true);
  };

  const getToken = async () => {
    const user_token = await AsyncStorage.getItem("user_token");
    user_token ? setHasToken(true) : setHasToken(false);
    user_token ? navigation.replace("Home") : navigation.replace("Auth");
  };

  useEffect(() => {
    !hasToken && setToken();
    hasToken && getToken();
  }, [hasToken]);

  return <Text>AuthLoadingScreen</Text>;
};

export default AuthLoadingScreen;
